import { connectToDatabase } from "@/helpers/db";

const sendDataToDB = async (req, res) => {

  if (req.method !== 'POST') {
    return;
  }

  const product = req.body.product;

  const client = await connectToDatabase();

  const db = client.db();

  const sendData = await db.collection('auth-pizza').insertOne({product: product});

  res.status(200).json({message: 'success'});
  client.close()
}

export default sendDataToDB;