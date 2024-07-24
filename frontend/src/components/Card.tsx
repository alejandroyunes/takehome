export default function Card() {
  // Please fetch the user data from the API

  return <section className="w-full h-full">
    <article className="max-w-screen-xl mx-auto bg-gray-100 rounded-lg">

      <div className="flex items-center justify-between md:flex-row flex-col">

        <div className="mt-4 w-full xs:w-1/2 md:w-full">

          <div className="flex items-center justify-between">

            <div className="flex flex-row items-center">
              <img src="https://picsum.photos/200/300" alt="avatar" className="object-cover w-8 h-8 rounded-full mr-2 ml-4" />

              <div>
                <h1 className="text-lg font-semibold">Diego Segura</h1>
                <p className="text-gray-500 text-xs">New York, NY</p>
              </div>
            </div>

            <div className="flex">

              <div className="flex mr-4 rounded-full p-2 px-4 bg-gray-200">
                <img src="/icons/instagram.svg" alt="instagram icon" className="w-4 h-4 sm:mr-2" />
                <span className="text-gray-700 text-xs font-semibold hidden sm:block">
                  Ver perfil
                </span>
              </div>

              <div className="flex mr-4 rounded-full p-2 px-4 bg-gray-200">
                <img src="/icons/tiktok.svg" alt="tiktok icon" className="w-4 h-4 sm:mr-2" />
                <span className="text-gray-700 text-xs font-semibold hidden sm:block">
                  Ver perfil
                </span>
              </div>
            </div>

          </div>

          <div>
            <div>
              <p className="text-gray-700 text-xs ml-14 mt-2">
                writer and designer
              </p>
              <p className="text-gray-700 text-xs ml-14">
                rsvp below <span className="text-gray-600 underline cursor-pointer">@terms_eccles</span> on tax day
              </p>
              <p className="text-gray-700 text-xs ml-14">
                follow for event updates
              </p>
            </div>

            <div className="flex flex-row justify-between">
              <div>
                <p className="text-gray-800 font-semibold text-xs ml-14 mt-2">
                  High Potential | <span className="text-gray-500 hover:text-gray-700 underline cursor-pointer">View Application</span>
                </p>

                <p className="text-gray-800 font-semibold text-xs ml-14">
                  ***********************
                </p>
              </div>

              <div className="flex flex-row justify-between items-center mr-4">
                <button className="text-gray-800 font-semibold text-xs bg-gray-200 px-2 py-1 rounded-full">
                  Customer
                </button>
              </div>

            </div>
          </div>

        </div>

        <div>
          <img src="https://picsum.photos/200/300" alt="" className="object-cover w-24 h-24" />
        </div>

      </div>

      <div className="flex justify-between space-x-2 p-3 bg-gray-200 rounded-bl-lg rounded-br-lg">
        <div className="flex flex-row hidden sm:flex">
          <button className="flex justify-center items-center px-3 py-1 mr-2 bg-green-200 text-green-800 rounded-full">Accept <span className="ml-2"><img src="/icons/chevronDown.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
          <button className="flex justify-center items-center px-3 py-1 mr-2 bg-red-200 text-red-800 rounded-full">Reject <span className="ml-2"><img src="/icons/stopSvg.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
          <button className="flex justify-center items-center px-3 py-1 bg-gray-100 text-gray-500 rounded-full">Source: Direct</button>
        </div>

        <div className="sm:hidden">
          <div className="relative group">
            <button className="flex justify-center items-center px-3 py-1 mr-2 bg-blue-200 text-blue-800 rounded-full">Select <span className="ml-2"><img src="/icons/chevronDown.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-2 bottom-full w-40">
              <button className="flex justify-center items-center px-3 py-1 mr-2 bg-green-200 text-green-800 rounded-full hover:bg-green-300">Accept <span className="ml-2"><img src="/icons/chevronDown.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
              <button className="flex justify-center items-center px-3 py-1 mt-2 mr-2 bg-red-200 text-red-800 rounded-full hover:bg-red-300">Reject <span className="ml-2"><img src="/icons/stopSvg.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
              <button className="flex justify-center items-center px-3 py-1 mt-2 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200">Source: Direct</button>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button className="flex justify-center items-center px-3 py-1 bg-yellow-100 text-yellow-500 rounded-full">Overdue</button>
          <p className="text-gray-700 text-sm ml-2">
            Applied: 03/04/2024
          </p>
        </div>

      </div>

    </article>
  </section>
}