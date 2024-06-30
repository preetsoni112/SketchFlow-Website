import React from "react";

function Contact() {
  let Name = document.querySelector('input[name="name"].value');
  let email = document.querySelector('input[name="email"].value');
  let Tele = document.querySelector('input[name="tel"].value');

  const getContact = (e) => {
    e.preventDefault();

    console.log("Name:", Name);
    console.log("Email:", email);
    console.log("Telephone:", Tele);
    Name, email, Tele = "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-lime-200">
      <div className="max-w-6xl mx-auto p-6 lg:p-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h1 className="text-4xl text-green-900 font-extrabold mb-4">
              Get in touch:
            </h1>
            <p className="text-lg font-medium text-gray-600 mb-6">
              Fill in the form to start a conversation
            </p>

            <div className="flex items-center mb-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-4 text-md font-semibold">
                Acme Inc, Street, State, Postal Code
              </div>
            </div>

            <div className="flex items-center mb-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-4 text-md font-semibold">
                +44 1234567890
              </div>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md font-semibold">
                info@acme.org
              </div>
            </div>
          </div>

          <form
            onSubmit={getContact}
            className="p-6 flex flex-col justify-center bg-gray-50 rounded-lg shadow-md"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="tel" className="mb-2 font-semibold text-gray-700">
                Telephone Number
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Telephone Number"
                className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
