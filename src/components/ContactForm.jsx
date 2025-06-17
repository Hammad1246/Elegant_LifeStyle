"use client";
import { HiOutlineMap } from "react-icons/hi";
import { CiMail, CiPhone } from "react-icons/ci";

const contactInfo = [
  {
    icon: <HiOutlineMap className="h-12 w-10" />,
    title: "Location",
    content: "3/18 RUDLOC RD, MORLEY WA",
  },
  {
    icon: <CiMail className="h-12 w-10" />,
    title: "Email",
    content: "info@Demo.com.pk",
  },
  {
    icon: <CiPhone className="h-12 w-10" />,
    title: "Contact No",
    content: "+61 410 985 414 / +61 422 288 285",
  },
];

function ContactForm() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 mt-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="md:text-4xl text-2xl font-semibold text-black uppercase">
          Let’s Bring Comfort Closer to You
        </h2>
        <p className="text-gray-500 mt-1 md:text-base text-xs">
          Have a question, need a custom design, or ready to order? We’re just a
          message away.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
        {/* Left Contact Info */}
        <div className="bg-gradient-to-br from-[#504132] to-[#332518] text-white md:p-10 p-5 rounded-xl shadow-md space-y-6">
          <h2 className="md:text-3xl text-lg  !font-bold md:mb-10 mb-6">Let's Get In Touch</h2>

          {contactInfo.map((item, index) => (
            <div key={index} className="flex justify-start items-start gap-2">
              {item.icon}
              <div>
                <h3 className="!font-semibold mb-1 md:text-base text-sm">{item.title}</h3>
                <p className="md:text-base text-xs">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Contact Form */}
        <form className="md:space-y-6 space-y-3 text-black">
          <label
            htmlFor="name"
            className="text-sm"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required={true}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          />
           <label
            htmlFor="email"
             className="text-sm"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          />
           <label
            htmlFor="phone"
             className="text-sm"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="phone"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          />
           <label
            htmlFor="message"
             className="text-sm"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#332518]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#504132] to-[#332518] text-white py-3 rounded-md text-sm tracking-wide uppercase cursor-pointer transition"
            onClick={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
