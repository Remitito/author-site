import Image from "next/image";
import { crimsonText, playfairDisplay } from "@/fonts/all";
import { IoBookOutline } from "react-icons/io5";

export const buttonStyle = `${crimsonText.className} cursor-pointer w-full sm:w-auto bg-[#1b3b1b] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-800 transition-all duration-200 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl`;

export default function Stack() {
  return (
    <div className="flex flex-col lg:flex-row h-[90vh] lg:px-20">
      {/* Book Cover Section */}
      <div className="w-full lg:w-2/5 flex justify-center items-center p-8 lg:p-0 bg-gray-50 lg:bg-white">
        <div className="relative">
          <Image
            className="rounded-lg object-cover shadow-lg"
            alt="Book Cover Photo"
            src="/coverPhoto.webp"
            height={300}
            width={300}
            sizes="(max-width: 768px) 300px, 400px"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center p-6 sm:p-8 ">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h1
            className={`${playfairDisplay.className} text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-bold mb-2 leading-tight text-gray-900`}
          >
            Dramatically Increase Your Chances of Becoming Wealthy
          </h1>

          <h2
            className={`${crimsonText.className}  sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 text-gray-600 leading-relaxed font-light`}
          >
            Based on decades of research from around the world
          </h2>

          <div className="mb-8 sm:mb-12">
            <p
              className={`${crimsonText.className} italic text-sm sm:text-base lg:text-lg  text-gray-900 mb-4 font-medium text-center`}
            >
              Discover the evidence-backed lifestyle strategies mostly likely to
              make you rich. Learn the optimal ways to:
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                "dress",
                "eat",
                "sleep",
                "spend",
                "relax",
                "think",
                "exercise",
                "read",
                "act",
              ].map((verb) => (
                <span
                  key={verb}
                  className={`${crimsonText.className} text-[#1b3b1b] text-[16px] sm:text-[18px] lg:sm:text-[19px] font-bold`}
                >
                  {verb.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
          <button className={buttonStyle}>
            <label className="flex justify-center items-center gap-2 cursor-pointer">
              Get Your Copy Now
              <IoBookOutline />
            </label>
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
