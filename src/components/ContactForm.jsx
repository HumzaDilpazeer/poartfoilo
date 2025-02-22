import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = "service_sscciyj";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        // Clear form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          reason: "",
        });
      },
      (error) => {
        console.error(error.text);
        setStatus("Failed to send message, please try again.");
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Parent container with two sections side by side */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-md rounded overflow-hidden">
        {/* Left: Contact Form Section */}
        <div className="w-full md:w-1/2 p-6">
          {/* Header / Logo / Title */}
          <div className="bg-blue-500 py-4 px-6 text-center rounded-t md:rounded-none">
            <h1 className="text-xl font-bold text-white">Customer Suppor</h1>
          </div>

          {/* Form Section */}
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-4 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-green-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-green-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-green-500"
                />
              </div>

              {/* Reason for contacting */}
              <div>
                <label htmlFor="reason" className="block mb-1 font-medium">
                  Reason for contacting us
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-green-500"
                >
                  <option value="">Choose your reason</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing">Billing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Contact Us
              </button>
            </form>

            {/* Submission Status */}
            {status && (
              <p className="mt-4 text-center text-green-600 font-medium">
                {status}
              </p>
            )}
          </div>
        </div>

        {/* Right: WhatsApp Contact Section */}
        <div className="w-full md:w-1/2 p-6 bg-green-50 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-4">Contact us on WhatsApp</h2>
          <p className="mb-4 text-center">
            Chat with our support team via WhatsApp for immediate assistance.
          </p>
          <a
            href="https://wa.me/+923341568703?text=Hello%2C%20I%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
