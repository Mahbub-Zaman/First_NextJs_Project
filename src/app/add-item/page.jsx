"use client";

import { useState } from "react";

export default function AddItem() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    switchType: "",
    layout: "",
    description: "",
    price: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save data (mock)
    setMessage("Item added successfully!");
    setForm({
      name: "",
      brand: "",
      switchType: "",
      layout: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-200 text-gray-600 p-6 shadow rounded">
      <h2 className="text-2xl font-bold text-black mb-4">Add Item</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form className="space-y-3" onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            className="w-full p-2 border text-gray-600 rounded"
            required
          />
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Add Item
        </button>
      </form>
    </div>
  );
}
