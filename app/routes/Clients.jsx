import React from 'react'
import {  deleteClient, getStoredClients } from '../data/clients'
import { json, redirect, useLoaderData } from '@remix-run/react'
import ClientsInfo from '../components/ClientsInfo'

function Clients() {
  const clients = useLoaderData()
  return (
    <div>
      <ClientsInfo deleteClient={deleteClient} clients={clients} />
    </div>
  )
}

export default Clients

export async function loader(){
const clients = await getStoredClients()

return (
  json(clients)
)

}

export async function action({ request }) {
  const formData = await request.formData();
  await deleteClient(formData.get("clientId"));
  return redirect(`/Clients`);
}