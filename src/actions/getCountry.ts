// actions/getCountry.js
"use server";

import { headers } from "next/headers";

export async function getLocation() {
  // Get headers from the incoming request
  const headersList = headers();

  // Read Vercel's geolocation headers directly
  const country = headersList.get("x-vercel-ip-country");

  const isInUK = country === "GB";

  return {
    isInUK,
    country: country || "Unknown",
  };
}
