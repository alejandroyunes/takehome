import React from 'react';

export default function Card() {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('/api/user/1');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);


  return <section className="w-full h-full">
    <article className="max-w-screen-lg mx-auto bg-gray-100 rounded-lg">

      <div className="flex items-center justify-between md:flex-row flex-col gap-4">

        <div className="mt-4 w-full xs:w-1/2 md:w-full flex flex-col space-y-0 md:space-y-8 w-full md:w-3/5">

          <div className="flex items-center justify-between">

            <div className="flex flex-row items-center">
              <img src="https://picsum.photos/200/300" alt="avatar" className="object-cover w-8 h-8 md:w-12 md:h-12 rounded-full mr-4 ml-4" />

              <div>
                <h1 className="text-xl md:text-3xl font-semibold">Diego Segura</h1>
                <p className="text-gray-500 text-md md:text-xl">New York, NY</p>
              </div>
            </div>

            <div className="flex">

              <div className="flex justify-center items-center mr-4 rounded-full p-2 px-4 bg-gray-200">
                <img src="/icons/instagram.svg" alt="instagram icon" className="w-4 h-4 sm:mr-2" />
                <span className="text-gray-700 text-xs md:text-base font-semibold hidden lg:block">
                  Ver perfil
                </span>
              </div>

              <div className="flex justify-center items-center mr-4 rounded-full p-2 px-4 bg-gray-200">
                <img src="/icons/tiktok.svg" alt="tiktok icon" className="w-4 h-4 sm:mr-2" />
                <span className="text-gray-700 text-xs md:text-base font-semibold hidden lg:block">
                  Ver perfil
                </span>
              </div>
            </div>

          </div>

          <div>
            <div className="mt-2">
              <p className="text-gray-700 text-sm md:text-base ml-16 md:ml-20">
                writer and designer
              </p>
              <p className="text-gray-700 text-sm md:text-base ml-16 md:ml-20">
                rsvp below <span className="text-gray-600 underline cursor-pointer">@terms_eccles</span> on tax day
              </p>
              <p className="text-gray-700 text-sm md:text-base ml-16 md:ml-20">
                follow for event updates
              </p>
            </div>

            <div className="flex flex-row justify-between mb-4">
              <div>
                <p className="text-gray-800 font-bold text-md mt-2 ml-16 md:ml-20">
                  High Potential | <span className="text-gray-400 text-sm md:text-base hover:text-gray-700 underline cursor-pointer">View Application</span>
                </p>

                <p className="text-gray-800 font-semibold text-xs mt-4 ml-16 md:ml-20">
                  <img src="/icons/diamond.svg" alt="diamond icon" className="w-4 h-4 mr-2 mb-0 md:mb-2" />
                </p>
              </div>

              <div className="flex flex-row justify-between items-center mr-4">
                <button className="text-gray-800 font-semibold text-xs md:text-base bg-gray-200 px-2 py-1 rounded-full">
                  Customer
                </button>
              </div>

            </div>
          </div>

        </div>

        <div className="flex justify-between p-4 md:p-4 list-none overflow-hidden mt-3 w-full md:w-2/5">
          <img src="https://picsum.photos/200/300" alt="" className="object-cover rounded-lg w-full h-48 mr-1 p-1 md:p-0" />
          <img src="https://picsum.photos/200/300" alt="" className="object-cover rounded-lg w-full h-48 mr-1 p-1 md:p-0" />
          <img src="https://picsum.photos/200/300" alt="" className="object-cover rounded-lg w-full h-48 p-1 md:p-0" />
        </div>

      </div>

      <div className="flex justify-between space-x-2 p-3 bg-gray-200 rounded-bl-lg rounded-br-lg">
        <div className="flex flex-row hidden sm:flex">
          <button className="flex justify-center items-center px-3 py-1 mr-2 bg-green-200 text-green-800 rounded-full">Accept <span className="ml-2"><img src="/icons/chevronDown.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
          <button className="flex justify-center items-center px-3 py-1 mr-2 bg-red-200 text-red-800 rounded-full">Reject <span className="ml-2"><img src="/icons/stop.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
          <button className="flex justify-center items-center px-3 py-1 bg-gray-100 text-gray-500 rounded-full">Source: Direct</button>
        </div>

        <div className="sm:hidden">
          <div className="relative group">
            <button className="flex justify-center items-center px-3 py-1 mr-2 bg-blue-200 text-blue-800 rounded-full">Select <span className="ml-2 group-hover:rotate-180 transition-transform duration-300"><img src="/icons/chevronDown.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg p-2 bottom-full w-40">
              <button className="flex justify-center items-center px-3 py-1 mr-2 bg-green-200 text-green-800 rounded-full hover:bg-green-300">Accept <span className="ml-2"><img src="/icons/chevronDown.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
              <button className="flex justify-center items-center px-3 py-1 mt-2 mr-2 bg-red-200 text-red-800 rounded-full hover:bg-red-300">Reject <span className="ml-2"><img src="/icons/stop.svg" alt="instagram icon" className="w-4 h-4" /></span></button>
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