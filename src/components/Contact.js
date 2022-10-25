import React from 'react'

const Contact = () => {

  return (
    <div>
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 my-12 bg-white border-2 border-pink rounded">
        <p className="text-3xl font-bold leading-7 text-center text-black m-5">
          Enquire
        </p>
        {/* onSubmit={handleContact} */}
        <form action="post"  >
          <div className="md:flex items-center mt-12 ">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-black ">
                Name
              </label>
              <input
                required
                type="text"
                className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                // onChange={(e) => setContactName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="font-semibold leading-none text-black">
                Last Name
              </label>
              <input
                required
                type="text"
                className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                // onChange={(e) => setContactLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex items-center mt-4  ">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-black ">
                Email
              </label>
              <input
                required
                type="email"
                className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                // onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="font-semibold leading-none text-black">
                Phone
              </label>
              <input
                required
                type="text"
                className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                // onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none text-black">
                Car
              </label>
              <input
                disabled
                value ='current car auto placeholder'
                type="text"
                className="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none text-black">
                Message
              </label>
              <textarea
                required
                type="text"
                className="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white rounded border-2 border-pink"
                // onChange={(e) => setContactMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="flex items-center align-center justify-center w-full">
            <button
              type="submit"
              className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-emerald-500 rounded hover:bg-emerald-900 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-100 focus:outline-none m-5"
            >
              Send enquiry
            </button>
            {/* {validateSending && 
              <p className=" font-bold text-green-800 bg-green-500 p-3 rounded" > {validateSending}</p>
            } */}
          </div>
        </form>
        </div>
    </div>
  )
}

export default Contact