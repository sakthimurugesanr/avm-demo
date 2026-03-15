import React, { useState } from "react";
import { toast } from "sonner";
import contactimage from "../assets/contact.jpg";
import { z, ZodError } from "zod";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import indiamart from "../assets/indmart.png";

// Google Sheet API
const GOOGLE_SHEET_API =
  "https://script.google.com/macros/s/AKfycbwEjxHLW0vEUdui-YUoynX3LK1e6J0WURyGBaF7gU7ElXAppxqB--EiRpBvyzHQV_tr/exec";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    message: z.string().min(1, "Message is required"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
     // ── Step 1: Zod validation ──
     contactSchema.parse(formData);
   } catch (validationError) {
     // ZodError always has .errors array
     if (validationError instanceof ZodError) {
       validationError.errors.forEach((err) => toast.error(err.message));
     } else {
       toast.error("Validation failed. Please check your inputs.");
     }
     setLoading(false);
     return; // ← stop here, don't submit
   }

    try {
    // ── Step 2: Submit to Google Sheet ──
     const res = await fetch(GOOGLE_SHEET_API, {
       method: "POST",
      headers: { "Content-Type": "text/plain" }, // ← fixes CORS on Google Apps Script
      body: JSON.stringify(formData),
    });

     const data = await res.json();

     if (data.success) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Submission failed. Please try again.");
    }
    } catch (networkError) {
      // plain Error object — no .errors array
      console.error("Network error:", networkError);
      toast.error("Could not send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-orange-600">Us</span>
        </h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE */}
          <div className=" rounded-xl p-2 flex flex-col justify-between">
            <img
              src={contactimage}
              alt="Contact"
              className="rounded-lg mb-6 object-cover h-60 w-full"
            />

            <div className="space-y-4 ">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-600" />
                <span className="font-medium">
                avmelectroplating@gmail.com
                </span>
              </div>

              <div className="flex flex-col items-start gap-3">
                <div className=" flex gap-2">
                  <FaPhoneAlt className="text-orange-600 mt-1" />
                  <p>
                    <strong>Pavithran:</strong> 99440 66321
                  </p>

                </div>
                <div className=" flex gap-2">
                  <FaPhoneAlt className="text-orange-600 mt-1" />
                  <p>

                    <strong>Muthu Kumar:</strong> 78269 94488
                  </p>

                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 text-2xl mt-2">
              <a
                href="https://www.instagram.com/your_instagram_handle/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/people/Avm-flagpoles/61557399955237/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.youtube.com/@avmflagpoles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.indiamart.com/avm-metals-tiruppur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={indiamart} alt="IndiaMart" className="h-7" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl "
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-medium transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Start Conversation"}
              </button>
            </div>
          </form>
        </div>

        {/* MAP */}
        <div className="mt-12">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Tiruppur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-72 rounded-xl shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;