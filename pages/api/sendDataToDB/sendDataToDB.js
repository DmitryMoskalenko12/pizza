import { connectToDatabase } from "@/helpers/db";

const sendDataToDB = async (req, res) => {

  if (req.method !== 'POST') {
    return;
  }

  const product = req.body.product;

  let client;

  try {
  client = await connectToDatabase();

  const db = client.db();

  const sendData = await db.collection('auth-pizza').insertOne({product: product});
  } catch (error) {
    res.status(403).json({message: 'Something went wrong!'});
    client.close();
    return;
  }

  res.status(200).json({message: 'success'});
  client.close()
}

export default sendDataToDB;