import React from 'react';
import pawsBackground from '../assets/paws.png';
import { Form, Link } from '@remix-run/react';
import { deleteClient } from '../data/clients';

function ClientsInfo({ clients }) {
  
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${pawsBackground})` }}>
      <div className="p-4">
        <h1 className="text-3xl font-Poetsen font-bold mb-6 text-center">Clients Info</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-4xl px-4">
          
          {clients.map((client) => (
            <div>
          <Link to={`/client/${client._id}`} >
            <div
              key={client._id}
              className="client-card bg-[#9DDE8B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="text-xl text-center font-Poetsen font-semibold mb-2">{client.name}</h4>
              <p className="mb-1"><span className="font-semibold">Email:</span> {client.email}</p>
              <p><span className="font-semibold">Pet Name:</span> {client.pet}</p>
              <Form className='flex justify-center mt-5' method="delete">
                <input type="hidden" name="clientId" value={client._id} />
              <button type="submit" className="bg-white  hover:bg-gray-200 text-black font-medium py-1 px-3 rounded focus:outline-none focus:shadow-outline">
                Delete
              </button>
              </Form>
            </div> 
            </Link>   
            </div>
          ))}
     
        </div>
      </div>
    </div>
  );
}

export default ClientsInfo;
