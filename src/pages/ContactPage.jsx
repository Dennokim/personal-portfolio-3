import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <Navbar />
        <h1 className="text-center text-8xl font-medium mt-44 mb-20">Get in touch</h1>
        <div className="container h-screen flex flex-col justify-center items-center">
        {submitted ? (
          <p>Your message was submitted successfully.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="font-medium text-2xl">
                What is your name?
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Type in your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium text-2xl">
                What is your email?
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium text-2xl">
                Your message?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you"
                value={formData.message}
                onChange={handleChange}
                required
                className="border rounded w-full py-2 px-3"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-black"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
