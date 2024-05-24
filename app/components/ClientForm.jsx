import React from 'react';
import { Form, useActionData } from "@remix-run/react";

export default function ClientForm() {
  const actionData = useActionData();

  return (
    <div className="font-Poetsen max-w-md mx-auto mt-8">
      <h1 className="text-2xl mb-4 text-center">Client Details:</h1>
      <Form method="post" className="space-y-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Owner's Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#9DDE8B]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#9DDE8B]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pet" className="block text-gray-700">
            Pet Name:
          </label>
          <input
            type="text"
            id="pet"
            name="pet"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#9DDE8B]"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#9DDE8B] text-white py-2 px-4 rounded-md hover:bg-[#628b56] focus:outline-none focus:bg-[#628b56]">
            Submit
          </button>
        </div>
      </Form>
      {actionData?.error && <p className="text-red-500 mt-4">{actionData.error}</p>}
      {actionData?.success && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md">
          <h2 className="text-xl mb-2">Form Data Submitted Successfully</h2>
          <p>Name: {actionData.name}</p>
          <p>Email: {actionData.email}</p>
          <p>Pet Name: {actionData.pet}</p>
        </div>
      )}
    </div>
  );
}
