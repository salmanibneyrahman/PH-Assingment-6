import bannerImg from '../assets/banner.png';

function Banner() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              New: AI-Powered Tools Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Supercharge Your<br />Digital Workflow
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-lg">
              Access premium AI tools, design assets, templates, and productivity
              software--all in one place. Start creating faster today.<br /><p>Explore Products</p>  
            </p>
            {/* <p className="text-gray-500 text-sm">Explore Products</p> */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-800 transition"
              >
                Explore Products
              </a>
              <a
                href="#"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center gap-2"
              >
                <i className="fa-solid fa-play text-xs"></i>
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src={bannerImg}
              alt="Digital Workflow Banner"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;