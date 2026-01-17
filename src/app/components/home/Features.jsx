import { FaKeyboard, FaLightbulb, FaTools } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTools size={36} className="text-indigo-500" />,
      title: "Hot-Swappable",
      desc: "Change switches anytime without soldering.",
    },
    {
      icon: <FaLightbulb size={36} className="text-yellow-400" />,
      title: "RGB Backlight",
      desc: "Fully customizable lighting effects.",
    },
    {
      icon: <FaKeyboard size={36} className="text-pink-500" />,
      title: "Premium Build",
      desc: "Solid aluminum body with durable switches.",
    },
  ];

  return (
    <section id="features" className="px-6 md:px-20 py-20 bg-gray-50">
      <h2 className="text-4xl text-black font-bold text-center mb-16">
        Why Choose Our Keyboards
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-10 bg-gray-200 rounded-3xl shadow-lg text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-6">{f.icon}</div>
            <h3 className="text-2xl text-black  font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
