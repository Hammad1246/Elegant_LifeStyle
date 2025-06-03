"use client";
import { HiOutlineMap } from "react-icons/hi";
import { CiMail, CiPhone } from "react-icons/ci";

const contactInfo = [
  {
    icon: <HiOutlineMap className="h-12 w-10" />,
    title: "Location",
    content: "3/18 RUDLOC RD, MORLEY WA"
  },
  {
    icon: <CiMail className="h-12 w-10" />,
    title: "Email",
    content: "info@Demo.com.pk"
  },
  {
    icon: <CiPhone className="h-12 w-10" />,
    title: "Contact No",
    content: "+61 410 985 414 / +61 422 288 285"
  }
];

function ContactForm() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 mt-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-black ">Contact Us</h2>
        <p className="text-gray-500 mt-1">Look at the latest collection that we offer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Contact Info */}
        <div className="bg-gradient-to-br from-[#504132] to-[#332518] text-white p-8 rounded-xl shadow-md space-y-6">
          <h3 className="text-2xl font-semibold">Let's Get In Touch</h3>
          
          {contactInfo.map((item, index) => (
            <div key={index} className="flex justify-start items-start gap-2">
              {item.icon}
              <div>
                <h3 className="!font-semibold mb-1">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Contact Form */}
        <form className="space-y-6 text-black">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#504132] to-[#332518] text-white py-3 rounded-md text-sm tracking-wide uppercase cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;