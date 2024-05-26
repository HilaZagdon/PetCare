// import { json, redirect } from "@remix-run/node";
// import { Form, useLoaderData, Link } from "@remix-run/react";
// import { getStoredClients, updateClient } from "../data/clients";
// import { ObjectId } from "mongodb";

// export async function loader({ params }) {
//   const clients = await getStoredClients();
//   const clientId = params.clientId;
//   const selectedClient = clients.find(client => client._id.toString() === clientId);
//   return json(selectedClient);
// }

// export async function action({ request, params }) {
//   const formData = await request.formData();
//   const updatedClient = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     pet: formData.get("pet"),
//   };

//   await updateClient(params.clientId, updatedClient);
//   return redirect(`/clients`);
// }

// export default function EditClientPage() {
//   const client = useLoaderData();

//   return (
//     <main className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
//       <header className="mb-6">
//         <nav className="mb-4">
//           <Link 
//             to={`/clients`} 
//             className="text-blue-500 hover:underline"
//           >
//             Back to Clients
//           </Link>
//         </nav>
//         <h1 className="text-4xl font-bold text-gray-800">Edit {client.name}'s Info</h1>
//       </header>
//       <Form method="patch" className="space-y-6">
//         <div className="p-4 bg-gray-100 rounded-md">
//           <label className="block text-gray-700 font-bold mb-2">Name</label>
//           <input
//             type="text"
//             name="name"
//             defaultValue={client.name}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="p-4 bg-gray-100 rounded-md">
//           <label className="block text-gray-700 font-bold mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             defaultValue={client.email}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="p-4 bg-gray-100 rounded-md">
//           <label className="block text-gray-700 font-bold mb-2">Pet Name</label>
//           <input
//             type="text"
//             name="pet"
//             defaultValue={client.pet}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//         </div>
//       </Form>
//     </main>
//   );
// }
