"use client";

import { useState } from "react";
import { playfairDisplay } from "@/fonts/all";
import { submitContactForm } from "@/actions/contact";
import { buttonStyle } from "../stack/page";

type FormStatus = {
  type: "success" | "error" | null;
  message: string | null;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setFormStatus({ type: null, message: null });

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("message", formData.message);

    const result = await submitContactForm(fd);

    if (result.success) {
      setFormStatus({ type: "success", message: result.message! });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormStatus({ type: "error", message: result.error! });
    }

    setIsSending(false);
  };

  return (
    <div className="h-[90vh] w-screen flex justify-center items-center flex-col p-4">
      <h2
        className={`${playfairDisplay.className} text-center text-3xl font-bold mb-6 text-gray-800`}
      >
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button type="submit" disabled={isSending} className={buttonStyle}>
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>

      {formStatus.message && (
        <div
          className={`mt-4 text-center p-3 rounded-md w-full max-w-lg ${
            formStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </div>
  );
}
