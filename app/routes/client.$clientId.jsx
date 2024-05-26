import React from 'react';
import { Form, Link, redirect, useLoaderData } from '@remix-run/react';
import pawsBackground from '../assets/paws.png';
import { getStoredClients , updateClient } from '../data/clients';

export default function Edit() {
  const client = useLoaderData();

  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-center mt-5" style={{ backgroundImage: `url(${pawsBackground})` }}>
      <div className="font-Poetsen max-w-3xl mx-auto p-6 bg-[#9DDE8B] shadow-md rounded-md">
        <header className="mb-6">
          <nav className="mb-4">
            <Link to={`/Clients`} className="text-[#628b56] hover:underline hover:text-[#30442a]">
              Back to Clients
            </Link>
          </nav>
          <h1 className="text-4xl font-bold text-center text-gray-800">Edit {client.name}'s Info</h1>
        </header>
        <Form method="patch" className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-md">
            <label className="block  text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={client.name}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={client.email}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <label className="block text-gray-700 font-bold mb-2">Pet Name</label>
            <input
              type="text"
              name="pet"
              defaultValue={client.pet}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#628b56] text-white font-medium py-2 px-4 rounded hover:bg-[#30442a] focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function loader({params}){
  const clients = await getStoredClients()
  const clientId = params.clientId
  const selectedClient = clients.find(client => client._id.toString() === clientId)
  return (selectedClient)

  }

  export async function action({ request, params }) {
    const formData = await request.formData();
    const updatedClient = {
      name: formData.get("name"),
      email: formData.get("email"),
      pet: formData.get("pet"),

    };
    await updateClient(params.clientId, updatedClient);
    return redirect(`/Clients`);
  }