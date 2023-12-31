import { connectToDatabase } from "@/helpers/db";
import { hashPassword } from "@/helpers/auth";

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const name = req.body.name;
  const phone = req.body.phone;

  const client = await connectToDatabase();

  if (!name || name.trim().length < 1 || !phone) {
    res.status(422).json({message: 'Неправильно введені дані'})
    client.close();
    return;
  }
  
  const db = client.db();

  const cloneName = await db.collection('auth-pizza').findOne({name: name});
 
  if (cloneName) {
    res.status(422).json({message: 'Оберіть унікальне ім\'я'})
    client.close();
    return;
  }

  const hashedPhone = await hashPassword(phone);

  const collection = await db.collection('auth-pizza').insertOne({
   name: name,
   phone: hashedPhone
  })

  res.status(200).json({ message: 'Обліковий запис успішно створено'});
  client.close();
}

export default handler;