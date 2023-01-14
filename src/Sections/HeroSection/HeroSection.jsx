import background from "../../images/background.jpg";
const HeroSection = () => {
  return (
    <main>
      <div>
        {/* Hero card */}
        <div className="relative bg-praimary">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-praimary" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={background}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 mix-blend-multiply" />
              </div>
              <div className="relative py-10 px-16 sm:py-24 lg:py-32 lg:px-8 text-center">
                <h1 className=" text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    E-Commerce & Delivery Website
                  </span>
                  <span className="block text-indigo-200">Shopping Now</span>
                </h1>

                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
