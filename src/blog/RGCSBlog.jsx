import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Brand Building",
    desc: "Building strong, recognizable brands through strategy, design, storytelling, and optimization.",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    bg: "from-blue-50 to-blue-100",
  },
  {
    title: "Fintech Solutions",
    desc: "Fintech compliance (AML/KYC), digital transformation, and innovation management.",
    icon: "https://cdn-icons-png.flaticon.com/512/483/483947.png",
    bg: "from-green-50 to-green-100",
  },
  {
    title: "Technology Solutions",
    desc: "AI strategy, Generative AI adoption, digitalization, and IT risk management.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    bg: "from-purple-50 to-purple-100",
  },
  {
    title: "Research Advisory",
    desc: "Grant proposals, conferences, IPR services, and research documentation.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    bg: "from-yellow-50 to-yellow-100",
  },
];

const RGCSAbout = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-14 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-10">

   
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
            RG Consultancy Services Pvt. Ltd.
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Developing Solutions for Tomorrow
          </p>

          <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed">
            RG Consultancy Services Private Limited is a forward-thinking organization
            that bridges the gap between <span className="font-semibold">technology</span>,
            <span className="font-semibold"> business</span>, and
            <span className="font-semibold"> innovation</span>. We deliver customized,
            technology-driven solutions that empower organizations to grow, scale,
            and succeed in a rapidly evolving digital world.
          </p>
        </div>

        <div className="border-b my-12" />


        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower businesses with technology-driven strategies that ensure
              sustainable growth, continuous innovation, and measurable impact
              across industries.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Vision"
            className="rounded-2xl shadow-lg"
          />
        </section>


        <section className="mt-20">
          <h2 className="text-3xl font-semibold text-blue-800 text-center mb-10">
            What Do We Do?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-r ${item.bg}
                transform transition duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex gap-5 items-start">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-14 h-14"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-700">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            Explore our services and products designed to accelerate growth,
            improve efficiency, and drive innovation.
          </p>

          <Link to="/services" className="inline-block mt-6 bg-white text-blue-900 px-8 py-3 rounded-xl text-lg font-semibold transition hover:scale-105"
>
            View Our Services & Products →
          </Link>
        </section>

      </div>
    </div>
  );
};

export default RGCSAbout;
