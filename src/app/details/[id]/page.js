"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function DetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetch("/data/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === Number(id));
        setAnimal(found);
      });
  }, [id]);

  // login check
  const isLoggedIn =
    typeof window !== "undefined" && localStorage.getItem("user");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    if (!form.name || !form.email || !form.phone || !form.address) {
      toast.warning("Please fill all fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("🎉 Booking Successful!");

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

      setLoading(false);
    }, 1000);
  };

  if (!animal) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div>
          <img
            src={animal.image}
            className="w-full h-full object-cover rounded-xl"
          />

          
        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-3xl font-bold">{animal.name}</h1>

          <p className="text-gray-500 mt-1">
            Type: {animal.type}
          </p>

          <p className="text-gray-500 mt-1">
            Breed: {animal.breed}
          </p>

          <p className="text-xl font-bold text-green-700 mt-2">
            Price: {animal.price}
          </p>

          <p className="text-gray-500 mt-1">
            Weight: {animal.weight}
          </p>

          <p className="text-gray-500 mt-1">
            Age: {animal.age}
          </p>

          <p className="mt-3 text-gray-600">
            Location: {animal.location}
          </p>

          <p className="mt-4 text-gray-600">
            Description: {animal.description}
          </p>

          <p className="text-gray-500 mt-1">
            Category: {animal.category}
          </p>

          {/* BOOKING FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 border p-4 rounded-xl shadow"
          >

            <h2 className="text-xl font-bold mb-3">
              Booking Form
            </h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border p-2 mb-2 rounded"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 mb-2 rounded"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border p-2 mb-2 rounded"
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border p-2 mb-2 rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded text-white transition ${
                loading
                  ? "bg-gray-400"
                  : "bg-green-700 hover:bg-green-900"
              }`}
            >
              {loading ? "Processing..." : "Place Booking"}
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}