import React from 'react'

const Reasons = () => {
  return (
    <div className=" px-4 md:px-16 lg:px-30 text-center mt-12">
      <h3 className='text-lg md:text-xl lg:text-2xl font-semibold font-mono'>Why Clients Trust Us</h3>
      <p className='text-[16px] md:text-lg lg:text-xl mb-4 md:mb-10'>Trusted by dozens of clients across residential & commercial spaces</p>

      {/* <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center mb-8">
        <div class="col-span-2  bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg ">
          Proven Track Record
        </div>
        <div class="col-span-2 md:col-span-1 bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg">
          Rapid Response Team
        </div>
        <div class="col-span-2 md:col-span-1 bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg">
          Licensed, Insured, & Vetted
        </div>
        <div class="col-span-2  bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg ">
          Customized Security Solutions
        </div>
      </div> */}

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center">
        <div class="col-span-12 md:col-span-7  bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg ">
          Proven Track Record
        </div>
        <div class="col-span-12 md:col-span-5 bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg">
          Rapid Response Team
        </div>
        <div class="col-span-12 md:col-span-5 bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg">
          Licensed, Insured, & Vetted
        </div>
        <div class="col-span-12 md:col-span-7 bg-blue-700 p-8 py-24 rounded-xl text-center text-white font-bold text-lg ">
          Customized Security Solutions
        </div>
      </div>
    </div>
  );
}

export default Reasons