import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative rounded-lg min-h-screen w-full flex items-center justify-center overflow-hidden m-0 p-0">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Mechanical Keyboards
        </h1>

        <p className="text-lg md:text-xl mb-10 opacity-90">
          Designed for gamers, developers, and creators who demand precision.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/items">
            <button className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white text-black shadow">
              Shop Now <FaArrowRight />
            </button>
          </Link>
          {/* <button className="px-8 py-3 rounded-2xl border border-white">
            Explore More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
