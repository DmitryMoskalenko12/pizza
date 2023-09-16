import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { connectToDatabase } from "@/helpers/db";
import { hashPassword, verifyPassword } from "@/helpers/auth";

async function handler (req, res) {
  if (req.method !== 'PATCH') {
    return;
  }

const session = await getServerSession(req, res, authOptions);

if (!session) {
  res.status(401).json({message: 'Ви не авторизовані'});
}
const userName = session?.user.name;
const newName = req.body.newName;
const oldPhone = req.body.oldPhone;
const newPhone = req.body.newPhone;

const client = await connectToDatabase();
const usersCollection = client.db().collection('auth-pizza');

const user = await usersCollection.findOne({name: newName || userName });

if (!user) {
  res.status(404).json({message: 'Користувача не знайдено'});
  client.close();
  return;
}

const verifyPhone = await verifyPassword(oldPhone, user.phone);

if (!verifyPhone) {
  res.status(403).json({message: 'Помилка при вводі старого номеру телефона'});
  client.close();
  return;
}

const hashedNewPhone = await hashPassword(newPhone);

const result = await usersCollection.updateOne({phone: user.phone}, {$set: {phone: hashedNewPhone}});

client.close();

res.status(200).json({message: 'Телефон змінено успішно!'});
}

export default handler;