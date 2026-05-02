export default function QurbaniSection() {
  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Qurbani Tips */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-green-500 inline-block">
              Qurbani Tips
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 mt-4">
              <li>✔ Choose a healthy and active animal.</li>
              <li>✔ Check the age and teeth of the animal.</li>
              <li>✔ Ensure the animal is free from major defects.</li>
              <li>✔ Give proper care and good feed.</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9"
            alt="cow"
            className="mt-4 rounded-xl object-cover h-40 w-full"
          />
        </div>

        {/* Top Breeds */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4 border-b-2 border-green-500 inline-block">
            Top Breeds
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1600758208050-7b2f3a5c3c3c"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
              <p className="mt-2 font-semibold">Sahiwal</p>
              <p className="text-xs text-gray-500">Cow</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1620192360206-9b8c0d6a7b5c"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
              <p className="mt-2 font-semibold">Friesian</p>
              <p className="text-xs text-gray-500">Cow</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
              <p className="mt-2 font-semibold">Sirohi</p>
              <p className="text-xs text-gray-500">Goat</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1612774412771-4b8c3f6a5c0a"
                className="w-20 h-20 mx-auto rounded-full object-cover"
              />
              <p className="mt-2 font-semibold">Black Bengal</p>
              <p className="text-xs text-gray-500">Goat</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 border-b-2 border-green-500 inline-block">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-sm text-gray-700 mt-4">
              <li>✔ Trusted by 10,000+ customers</li>
              <li>✔ 100% customer satisfaction</li>
              <li>✔ Easy booking process</li>
              <li>✔ After sales support</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
