import React from 'react';

function ClientsInfo({ clients }) {
  return (
    <div className="p-4 mx-16">
      <h1 className="font-Raleway font-bold text-6xl mb-6 text-center">Clients Info</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {clients.map((client) => (
          <div
            key={client._id}
            className="client-card  text-white bg-[#9DDE8B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h4 className="text-3xl font-bold text-center mb-2 ">{client.name}</h4>
            <p className="mb-1"><span className="font-bold">Email:</span> {client.email}</p>
            <p><span className="font-bold">Pet Name:</span> {client.pet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsInfo;
