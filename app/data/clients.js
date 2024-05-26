import { MongoClient, ObjectId } from "mongodb";

const MONGO_URI = "mongodb+srv://hilatoar:1Qazse45!@petcare.cp8i9lx.mongodb.net/?retryWrites=true&w=majority&appName=PetCare";
const MONGODB_DB_NAME = "PetCare";
const COLLECTION_NAME = "Clients";

async function connectToDatabase() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return { client, collection };
}

export async function getStoredClients() {
  const { client, collection } = await connectToDatabase();
  try {
    const clients = await collection.find({}).toArray();
    return clients;
  } catch (error) {
    console.error('Error reading clients data:', error);
    return [];
  } finally {
    await client.close();
  }
}

export async function updateClient(id, updatedClient) {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedClient });
  await client.close();
}

export async function deleteClient(clientId) {
  const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db(MONGODB_DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
   
    await collection.findOneAndDelete({ _id: new ObjectId(clientId)});
    console.log("Client deleted successfully.");
  } catch (error) {
    console.error("Error deleting Client:", error);
    throw error;
  } finally {
    await client.close();
  }
}
