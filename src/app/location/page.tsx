// app/page.js (Server Component - no "use client")
import { headers } from "next/headers";

export default async function UKLocationDisplay() {
  // This runs on the server automatically
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country");
  const isInUK = country === "GB";

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Your Location
      </h2>

      <div
        className={`p-4 rounded text-center font-semibold ${
          isInUK
            ? "bg-green-100 border border-green-400 text-green-800"
            : "bg-orange-100 border border-orange-400 text-orange-800"
        }`}
      >
        {isInUK ? "🇬🇧 You are in the UK!" : "🌍 You are not in the UK"}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>Detected automatically on page load</p>
        <p>Country code: {country || "Unknown"}</p>
      </div>
    </div>
  );
}
