import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import Values from '../components/about/Values';
import { downloadFile } from '../utils/helperFunctions';
import file from '../assets/form.pdf';

const Team = () => {
  return (
    <div>
      <div className="text-center my-10 md:my-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#3C18BE]">
          BE A PART OF OUR TEAM
        </h1>
        <p className="text-lg md:text-xl lg:text-3xl mt-2 font-semibold">
          Join Safety Security, Inc.
        </p>
      </div>

      <hr className="border-neutral-300 border-2" />

      <div className="grid md:grid-cols-2 p-4 gap-8 mb-14 md:mb-20 md: lg:mx-38 items-center">
        <div className="flex-col space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold ml-1">
            How to Apply
          </h2>
          <div className="shadow-lg p-4 rounded-md">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="w-10 h-10 rounded-full bg-red-200 text-red-600 font-extrabold flex items-center justify-center">
                01
              </div>
              <h3 className="text-[15px] md:text-lg font-bold">
                Download our Application Form
              </h3>
            </div>
          </div>
          <div className="shadow-lg p-4 rounded-md">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="w-10 h-10 rounded-full bg-red-200 text-red-600 font-extrabold flex items-center justify-center">
                02
              </div>
              <h3 className="text-[16px] md:text-lg font-bold">
                Complete the form
              </h3>
            </div>
          </div>
          <div className="shadow-lg p-4 rounded-md">
            <div className="flex flex-row items-center justify-start gap-6">
              <div className="w-10 h-10 rounded-full bg-red-200 text-red-600 font-extrabold flex items-center justify-center">
                03
              </div>
              <h3 className="text-[16px] md:text-lg font-bold">
                Send your completed form and resume to: <br />
                <a
                  href="mailto:Service@safetysecurityinc.com"
                  className="text-[#512ADE]"
                >
                  Service@safetysecurityinc.com
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xl mx-auto">
          <button
            type="button"
            className="p-4 bg-[#3C18BE] w-full h-16 rounded-xl text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
            onClick={() =>
              downloadFile(
                file,
                "Safety Security Inc - Job Application.pdf"
              )
            }
          >
            <Icon icon="akar-icons:download" className="-mt-1 text-red-500" />
            Download Application Form Here
          </button>
        </div>
      </div>

      <section className='mb-13 md:mb-16'>
        <Values stage={2} />
      </section>
    </div>
  );
}

export default Team

// Remains a code to download a file to the user's device and preferred location.