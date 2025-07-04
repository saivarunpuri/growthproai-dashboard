import { FaStar, FaRegCommentDots, FaQuoteLeft } from "react-icons/fa";

export default function BusinessCard({ data, onRegenerate }) {
  return (
    <div className="mt-6 bg-white p-4 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">
        {data.name} - {data.location}
      </h2>
      <p className="mb-1">
        <FaStar className="inline text-yellow-500 mr-1" /> {data.rating} / 5
      </p>
      <p className="mb-1">
        <FaRegCommentDots className="inline text-blue-500 mr-1" />{" "}
        {data.reviews} Reviews
      </p>
      <p className="mb-2 italic">
        <FaQuoteLeft className="inline mr-2 text-gray-400" />
        {data.headline}"
      </p>
      <button
        onClick={onRegenerate}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}
