import React, { useState } from "react";
import { toast } from "sonner";

const GOOGLE_SHEET_API =
  `https://script.google.com/macros/s/AKfycbwEjxHLW0vEUdui-YUoynX3LK1e6J0WURyGBaF7gU7ElXAppxqB--EiRpBvyzHQV_tr/exec`;


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Successfully registered ");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-2.5 py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Contact <span className="text-orange-600">Us</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
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
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-medium transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Start Conversation"}
            </button>
          </div>
        </form>

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
