export default function Card() {
  // Please fetch the user data from the API

  return <section className="w-full h-full p-4">
    <article className="max-w-screen-xl mx-auto bg-gray-200 rounded-lg">

      <div className="flex items-center justify-between md:flex-row flex-col">

        <div className="space-y-2 flex flex-row items-center">
          <img src="https://picsum.photos/200/300" alt="avatar" className="object-cover w-12 h-12 rounded-full mr-4 ml-4" />
          <div className="mr-4">
            <h1 className="text-lg">Diego Segura</h1>
            <p className="text-gray-500 text-xs">New York, NY</p>
          </div>

          <div className="flex items-center mr-4 border border-gray-300 rounded-lg p-2 bg-gray-300">
            <img src="/icons/instagram.svg" alt="arrow-right" className="w-4 h-4 mr-2" />
            <span className="text-gray-500 text-xs">
              Ver perfil
            </span>
          </div>

          <div className="flex items-center mr-4 border border-gray-300 rounded-lg p-2 bg-gray-300">
            <img src="/icons/tiktok.svg" alt="arrow-right" className="w-4 h-4 mr-2" />
            <span className="text-gray-500 text-xs">
              Ver perfil
            </span>
          </div>
        </div>

        <div>
          <img src="https://picsum.photos/200/300" alt="" className="object-cover w-24 h-24" />
        </div>

      </div>

      <div className="flex space-x-2 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Accept</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">Reject</button>
      </div>
    </article>
  </section>
}