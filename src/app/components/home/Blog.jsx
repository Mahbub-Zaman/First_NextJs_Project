const blogs = [
  {
    title: "Top 5 Mechanical Keyboards for Gamers",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "How to Customize Your Keyboard RGB",
    image:
      "https://images.unsplash.com/photo-1625130694338-4110ba634e59?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Mechanical vs Membrane Keyboards: Which is Better?",
    image:
      "https://images.unsplash.com/photo-1718372146650-798b9fb23573?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Top Accessories for Keyboard Enthusiasts",
    image:
      "https://images.unsplash.com/photo-1760654550361-5437f6176370?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="px-6 md:px-20 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-black text-center mb-16">Tips & Guides</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {blogs.map((b, i) => (
          <a
            key={i}
            href={b.link}
            className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-black mb-4">{b.title}</h3>
              <button className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition">
                Read More
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
