import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { MongoClient } from "mongodb";
import ClientForm from "../components/ClientForm";
import React from 'react'
import OpenPic from "../assets/Openpic.png"
const MONGO_URI = "mongodb+srv://hilatoar:1Qazse45!@petcare.cp8i9lx.mongodb.net/?retryWrites=true&w=majority&appName=PetCare";
const MONGODB_DB_NAME = "PetCare";
const COLLECTION_NAME = "Clients";




function _index() {
  return (
    <div className="font-Poetsen relative">
      <div className="relative w-full">
        <img src={OpenPic} className="w-full animate-slideIn" alt="OpenPic" />
        <div className="absolute top-0 left-0 ml-8 h-full flex flex-col justify-center items-start text-center text-white">
          <h1 className="font-Raleway font-bold text-9xl">PetCare</h1>
          <p className="mt-2 pl-2 text-2xl">Manage your pet clients in a click!</p>
        </div>
      </div>
      <ClientForm />
    </div>
  );
}

export default _index;
async function connectToDatabase() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return { client, collection };
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const pet = formData.get("pet");

  if (!name || !email || !pet) {
    return json({ error: "Name, email and pet name are required" }, { status: 400 });
  }

  try {
    const { client, collection } = await connectToDatabase();

    const existingClient = await collection.findOne({ email });
    if (existingClient) {
      client.close();
      return json({ error: "Email already exists" }, { status: 400 });
    }

    await collection.insertOne({ name, email, pet });
    client.close();

    return json({ success: true, name, email, pet });
  } catch (error) {
    console.error("Error connecting to the database or inserting data:", error);
    return json({ error: "Failed to submit data. Please try again later." }, { status: 500 });
  }
};

