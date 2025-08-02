import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'
import { LocationMap } from '../components/MapComponent';
import { sendEmail } from '../utils/helperFunctions';

const Contact = () => {
  const [form, setForm] = useState({
    title: 'Contact Us',
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const time = new Date().toString(); // or your given time string
      const trimmed = time.split(" GMT")[0];
      // console.log(trimmed);
      let formData = {
        ...form,
        time: trimmed
      }
      console.log('Submitting: ', formData);
      await sendEmail(formData, 'contact');
      setStatus("Thanks for your message!");
    } catch (error) {
      console.log('Error sending: ', error);
      setStatus("Oops! There was a problem.");
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mx-8 md:mx-16 mt-8">
        <h3 className="text-xl font-semibold">
          We Would like to Hear from You
        </h3>
        <p className="text-sm md:text-lg">Send us a DM or call us</p>
      </div>

      <div className="bg-neutral-300 mt-8 h-108">
        <LocationMap />
      </div>

      <div className="grid md:grid-cols-2 p-4 gap-8 mb-14 md:mb-20">
        <div className="flex-col space-y-4">
          <div className="shadow-lg p-4 rounded-md">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
                <Icon
                  icon="basil:location-outline"
                  fontSize={24}
                  className="text-red-500 font-extrabold"
                />
              </div>
              <h3 className="text-[15px] md:text-lg font-bold">
                154 Maverick Street, Boston, MA 02128
              </h3>
            </div>
          </div>
          <div className="shadow-lg p-4 rounded-md">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
                <Icon
                  icon="mdi:phone"
                  fontSize={24}
                  className="text-red-500 font-extrabold"
                />
              </div>
              <h3 className="text-[16px] md:text-lg font-bold">
                781.417.8258, 781.816.0430 
              </h3>
            </div>
          </div>
          <div className="shadow-lg p-4 rounded-md">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
                <Icon
                  icon="material-symbols:mail-outline-rounded"
                  fontSize={24}
                  className="text-red-500 font-extrabold"
                />
              </div>
              <h3 className="text-[16px] md:text-lg font-bold">
                Service@safetysecurityinc.com
              </h3>
            </div>
          </div>
        </div>
        <div className="p-1 md:p-3">
          <h3 className="text-xl md:text-2xl font-bold">Send Us A Message</h3>
          <form
            onSubmit={handleSubmit}
            className="w-full mt-6 flex-col space-y-2"
          >
            <label htmlFor="name" className="font-semibold ml-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              className="border border-neutral-400 w-full p-3 rounded-md outline-0"
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="font-semibold ml-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              className="border border-neutral-400 w-full p-3 rounded-md outline-0"
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className="font-semibold ml-2">
              Message
            </label>
            <textarea
              rows={6}
              type="text"
              name="message"
              value={form.message}
              className="border border-neutral-400 w-full p-3 rounded-md outline-0"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="bg-[#3C18BE] w-full h-12 rounded-lg text-white cursor-pointer"
            >
              Submit
            </button>
            {status && (
              <p
                className={`${
                  status.includes("Oops") ? "text-red-500" : "text-green-500"
                } font-semibold text-center`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact