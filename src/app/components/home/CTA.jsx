const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20 rounded-3xl mx-6 md:mx-20 my-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Join Our Newsletter
      </h2>
      <p className="text-lg md:text-xl mb-8 opacity-90">
        Get the latest keyboard drops, exclusive deals, and pro tips straight to your inbox.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:flex-1 px-5 py-4 rounded-full bg-gray-300 text-black focus:outline-none shadow-lg"
        />
        <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold shadow-lg transition-transform hover:scale-105 hover:bg-yellow-500">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default CTA;
