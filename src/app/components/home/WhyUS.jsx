import { FaTruck, FaShieldAlt, FaHeadset } from "react-icons/fa";

const WhyUs = () => {
  const benefits = [
    { icon: <FaTruck size={28} />, title: "Fast Shipping", desc: "Get your keyboards delivered quickly and safely." },
    { icon: <FaShieldAlt size={28} />, title: "1-Year Warranty", desc: "All products come with full warranty support." },
    { icon: <FaHeadset size={28} />, title: "24/7 Support", desc: "Our team is always ready to help you." },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-black mb-16">Why Shop With Us</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {benefits.map((b) => (
          <div key={b.title} className="p-8 rounded-3xl shadow-lg bg-gray-200 text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex justify-center mb-4 text-indigo-500">{b.icon}</div>
            <h3 className="text-2xl text-black font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
