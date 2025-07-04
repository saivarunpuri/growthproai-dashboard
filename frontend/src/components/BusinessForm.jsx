import { useState } from "react";
import { toast } from "react-toastify";

export default function BusinessForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) {
      toast.error("Please fill out all fields");
      return;
    }
    if (!/^[a-zA-Z\s&]+$/.test(name)) {
      toast.error("Business name can only contain letters, spaces, and &");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(location)) {
      toast.error("Location can only contain letters and spaces");
      return;
    }
    onSubmit({ name, location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow-md w-full max-w-md"
    >
      <div className="mb-4">
        <label className="block mb-1">Business Name</label>
        <input
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Cake & Co"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Location</label>
        <input
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Mumbai"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
