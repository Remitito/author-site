import Image from "next/image";
import { crimsonText, playfairDisplay } from "@/fonts/all";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Book Cover Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-0 bg-gray-50 lg:bg-white">
        <div className="relative">
          <Image
            className="rounded-lg object-cover shadow-lg"
            alt="Book Cover Photo"
            src="/coverPhoto.webp"
            height={400}
            width={400}
            sizes="(max-width: 768px) 300px, 400px"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 ">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h1
            className={`${playfairDisplay.className} text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-gray-900`}
          >
            Dramatically Increase Your Chances of Becoming Rich
          </h1>

          <h2
            className={`${crimsonText.className} text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-gray-600 leading-relaxed font-light`}
          >
            Based on decades of research from around the world
          </h2>

          <div className="mb-8 sm:mb-12">
            <p
              className={`${crimsonText.className} text-sm sm:text-base lg:text-lg leading-relaxed text-gray-900 mb-4 font-medium text-center`}
            >
              Discover the evidence-backed ways to:
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "dress",
                "eat",
                "sleep",
                "relax",
                "think",
                "exercise",
                "read",
                "spend",
                "act",
              ].map((verb) => (
                <span
                  key={verb}
                  className={`${crimsonText.className} text-sm sm:text-base text-gray-900 font-semibold`}
                >
                  • {verb.toUpperCase()}
                </span>
              ))}
            </div>
            <p
              className={`${crimsonText.className} text-sm sm:text-base lg:text-lg leading-relaxed text-gray-900 mt-4 font-medium text-center`}
            >
              that are most strongly associated with building wealth
            </p>
          </div>
          <button
            className={`${crimsonText.className} w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-all duration-200 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl`}
          >
            Get Your Copy Now
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Questions?{" "}
            <a href="/contact" className="text-gray-900 hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
