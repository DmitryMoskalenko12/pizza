import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { connectToDatabase } from "@/helpers/db";

async function handler (req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

const session = await getServerSession(req, res, authOptions);

if (!session) {
  res.status(401).json({message: 'Ви не авторизовані'});
}

const oldName = req.body.oldName;
const newName = req.body.newName;

const client = await connectToDatabase();
const usersCollection = client.db().collection('auth-pizza');

const user = await usersCollection.findOne({name: oldName});

if (!user) {
  res.status(404).json({message: 'Користувача не знайдено'});
  client.close();
  return;
}

const currentName = user.name;

const namesAreEqual = currentName === newName;

if (namesAreEqual) {
  res.status(403).json({message: 'Оберіть інше ім`я'});
  client.close();
  return;
}

  const userClone = await usersCollection.findOne({name: newName});

  if (userClone) {
    res.status(403).json({message: 'Оберіть унікальне ім`я'});
    client.close();
    return;
  }

  const result = await usersCollection.updateOne({name: oldName}, {$set: {name: newName}});

  client.close();

  res.status(200).json({message: 'Ім\'я успішно змінене', newName});
}

export default handler;