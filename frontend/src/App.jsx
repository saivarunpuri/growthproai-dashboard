import { useState } from "react";
import BusinessForm from "./components/BusinessForm.jsx";
import BusinessCard from "./components/BusinessCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch business data");
      }
      const data = await res.json();
      setBusinessData({ ...formData, ...data });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = async () => {
    setLoading(true);
    try {
      const { name, location } = businessData;
      const res = await fetch(
        `${API_URL}/regenerate-headline?name=${name}&location=${location}`
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to regenerate headline");
      }
      const { headline } = await res.json();
      setBusinessData((prev) => ({ ...prev, headline }));
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-2xl font-bold mb-6">
        Mini Local Business SEO Dashboard
      </h1>
      <BusinessForm onSubmit={handleSubmit} />
      {loading && (
        <div className="mt-4 flex items-center justify-center">
          <svg
            className="animate-spin h-6 w-6 text-blue-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          <span className="ml-2">Loading...</span>
        </div>
      )}
      {businessData && !loading && (
        <BusinessCard data={businessData} onRegenerate={handleRegenerate} />
      )}
    </div>
  );
}
