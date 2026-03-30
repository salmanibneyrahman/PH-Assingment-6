function Stats() {
  return (
    <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center text-white">
          <div className="flex-1 py-4 md:py-0">
            <h3 className="text-4xl md:text-5xl font-extrabold">50K+</h3>
            <p className="text-purple-200 mt-2 text-sm md:text-base">Active Users</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-purple-400 opacity-50"></div>
          <div className="flex-1 py-4 md:py-0">
            <h3 className="text-4xl md:text-5xl font-extrabold">200+</h3>
            <p className="text-purple-200 mt-2 text-sm md:text-base">Premium Tools</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-purple-400 opacity-50"></div>
          <div className="flex-1 py-4 md:py-0">
            <h3 className="text-4xl md:text-5xl font-extrabold">4.9</h3>
            <p className="text-purple-200 mt-2 text-sm md:text-base">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;