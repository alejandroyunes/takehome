export default function Card() {
  // Please fetch the user data from the API

  return <section className="w-full h-full p-5">
    <article className="max-w-screen-xl mx-auto bg-gray-200 rounded-lg">

      <div className="flex items-center justify-between md:flex-row flex-col">

        <div className="space-y-2">
          <h1 className="text-2xl">Alejandro</h1>
          <p>medellin</p>
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
