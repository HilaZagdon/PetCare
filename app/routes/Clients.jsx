import React from 'react'
import {  getStoredClients } from '../data/clients'
import { json, useLoaderData } from '@remix-run/react'
import ClientsInfo from '../components/ClientsInfo'

function Clients() {
  const clients = useLoaderData()
  return (
    <div>
      <ClientsInfo clients={clients} />
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