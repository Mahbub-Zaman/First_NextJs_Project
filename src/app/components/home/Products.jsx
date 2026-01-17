import { FaStar } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Redragon K552 Mechanical Keyboard",
      price: "$139",
      rating: 5,
      image:
        "https://i.ibb.co/5qm72yd/redragon-k552.webp",
    },
    {
      id: 2,
      name: "KeyZone TKL Pro",
      price: "$159",
      rating: 5,
      image:
        "https://i.ibb.co/bM8jLk69/b1bec56fbec1d43f008d574c94fe0329-original.jpg",
    },
    {
      id: 3,
      name: "HyperX Alloy FPS Pro",
      price: "$179",
      rating: 4,
      image:
        "https://i.ibb.co/XrMxQvbb/images-17.jpg",
    },
  ];

  return (
    <section id="products" className="px-6 md:px-20 py-20 bg-gray-50">
      <h2 className="text-4xl text-black  font-bold text-center mb-16">
        Top Selling Keyboards
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white text-black rounded-3xl overflow-hidden shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>

              {/* Rating */}
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {[...Array(p.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Price */}
              <p className="text-xl font-bold mb-6">{p.price}</p>

              {/* Button */}
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-purple-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
