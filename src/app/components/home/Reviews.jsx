import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Software Engineer",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
      comment:
        "Absolutely love this keyboard. The build quality is solid and typing feels amazing.",
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "Content Creator",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
      comment:
        "The RGB lighting and smooth switches make this perfect for long editing sessions.",
    },
    {
      id: 3,
      name: "Ryan Chen",
      role: "Pro Gamer",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=45",
      comment:
        "Fast response, great key feel, and very comfortable during long gaming hours.",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "UI/UX Designer",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47",
      comment:
        "Minimal design, premium finish, and excellent typing sound. Highly recommended!",
    },
  ];

  return (
    <section id="reviews" className="px-6 md:px-20 py-20 bg-gray-50">
      <h2 className="text-4xl text-black font-bold text-center mb-16">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-200 rounded-3xl shadow-lg p-8 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-500">
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Icon */}
            <FaQuoteLeft className="mx-auto mb-4 text-indigo-500 text-2xl" />

            {/* Comment */}
            <p className="mb-4 text-gray-600 text-sm">{review.comment}</p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-3 text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Name & Role */}
            <h4 className="font-semibold text-black text-lg">{review.name}</h4>
            <p className="text-sm text-gray-500">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
