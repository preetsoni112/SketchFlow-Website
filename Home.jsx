import React from 'react'

function Body() {
  return (
    <div className='bg-gradient-to-r from-green-200 to-lime-200 '>
      <div className="w-full h-screen flex flex-col md:flex-row flex-wrap justify-center text-center items-center md:justify-between" id="MidTexts">
        <div className="p-10 text-center md:text-left">
          <p className="font-semibold text-7xl ml-0 md:ml-20">
            Sketch <span className="text-red-600">Flow</span>
          </p>
          <p className="font-medium p-1 text-3xl font-serif ml-0 md:ml-20 mt-6">
            Get your sketch now in 1 hour
          </p>
          <button className="p-3 text-3xl text-white cursor-pointer rounded-2xl bg-teal-500 mt-4 ml-0 md:ml-20 pl-8 pr-8">
            Contact Us
          </button>
        </div>
        <div className="mt-12 flex justify-center md:justify-around sm:ml-0 md:mr-24">
          <img
            className="w-96 rounded-full border-lime-300 border-2 shadow-md shadow-lime-300"
            src="https://images.pexels.com/photos/948620/pexels-photo-948620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Img Error"
          />
        </div>
      </div>
    <div className="bg-lime-200 w-full h-full">
      <div className=" relative">
        <p className="hidden md:block md:text-7xl absolute mt-60 ml-36 text-white text-4xl first-letter:text-red-600 md:first-letter:text-9xl font-medium">
          Real Art <br />
          <span className="ml-10 mt-12">
            Is From <br />
            <span className="md:ml-28 md:mt-12 text-red-600 font-4xl md:font-8xl">
              The Heart
            </span>
          </span>
        </p>
        <img
          className="w-full"
          src="https://images.pexels.com/photos/3771055/pexels-photo-3771055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Img Not Available"
        />
      </div>
    </div>
    </div>
  )
}

export default Body
