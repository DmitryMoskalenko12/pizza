import { connectToDatabase } from "@/helpers/db";

const sendPhoneToDB = async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

const phone = req.body.phone;

let client;

  try {
    client = await connectToDatabase();

    const db = client.db();

    const sendData = await db.collection('auth-pizza').insertOne({phone1: phone});
  } catch (error) {
    res.status(403).json({message: 'Уппс...виникла мопилка'});
    client.close();
  }

  res.status(200).json({message: 'Повідомлення успішно відправлено'});
  client.close()
}

export default sendPhoneToDB;