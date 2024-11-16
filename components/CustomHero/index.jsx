import Image from "next/image";

export default function CustomHero() {
  const images = [
    "/images/banner/banner-1.jpg",
    "/images/banner/banner-2.jpg",
    "/images/banner/banner-3.jpg",
    "/images/banner/banner-1.jpg",
    "/images/banner/banner-2.jpg",
    "/images/banner/banner-3.jpg",
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-16 py-12 lg:py-24">
      {/* Left Section */}
      <div className="lg:max-w-lg text-center lg:text-left">
        <button className="text-indigo-600 font-medium hover:underline mb-4">
          Checkout updates &raquo;
        </button>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          Experience Life <br /> with Rajib Hossain
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          The best experiences, without leaving your home. VR provides
          everything you need to stay sane and safe during the pandemic.
        </p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition">
          Take me home
        </button>
      </div>

      {/* Right Section */}
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div class="h-[40vh] w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
            <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-[40vh] w-44 overflow-hidden rounded-lg">
            <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div class="h-[65vh] w-44 overflow-hidden rounded-lg">
            <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-[20vh] w-44 overflow-hidden rounded-lg">
            <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-[15vh] w-44 overflow-hidden rounded-lg">
            {/* <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            /> */}
          </div>
        </div>
        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div class="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="h-64 w-44 overflow-hidden rounded-lg">
            <img
              src={images[0]}
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
