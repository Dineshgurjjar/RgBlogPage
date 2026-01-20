import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Building",
    desc: "Brand strategy, team building, identity design, messaging, and performance analysis.",
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    bg: "from-blue-50 to-blue-100",
  },
  {
    title: "Fintech Solutions",
    desc: "Fintech strategy, digital transformation, innovation management, and compliance.",
    img: "https://cdn-icons-png.flaticon.com/512/483/483947.png",
    bg: "from-green-50 to-green-100",
  },
  {
    title: "Technology Solutions",
    desc: "AI strategy, Generative AI, digitalization, and IT risk assessment.",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    bg: "from-purple-50 to-purple-100",
  },
  {
    title: "Research Advisory",
    desc: "Grant writing, IPR services, data analysis, and research documentation.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    bg: "from-yellow-50 to-yellow-100",
  },
];

const products = [
  {
    title: "RGBot",
    desc: "AI-powered WhatsApp chatbot for customer engagement and cost reduction.",
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
  },
  {
    title: "RGHACKS",
    desc: "Hackathon Management System for transparent and paperless operations.",
    img: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
  },
  {
    title: "RGCMS",
    desc: "AI-powered Conference Management System.",
    img: "https://cdn-icons-png.flaticon.com/512/942/942751.png",
  },
  {
    title: "RGMaps",
    desc: "Smart personalized business maps with movement tracking.",
    img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  },
];

const RGCSServices = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen py-14 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-10">

   
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900">
          Our Services & Products
        </h1>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Empowering businesses with technology, innovation, and research-driven solutions.
        </p>

        <div className="border-b my-10" />

        <section>
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-r ${service.bg}
                transform transition duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-start gap-5">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-700">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

     
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8">
            Our Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 border rounded-2xl bg-white text-center
                transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

  
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-800 text-white px-8 py-3 rounded-xl
            text-lg font-medium transition hover:bg-blue-900 hover:scale-105"
          >
            ← Back to About
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RGCSServices;
