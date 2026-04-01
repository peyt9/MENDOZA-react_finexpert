import React from "react";
import servicesData from "../Servicedata.json";
import { FileText, LineChart, ShieldCheck, ArrowRight } from "lucide-react";

const Services = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case "file":
        return <FileText size={22} className="text-blue-600" />;
      case "chart":
        return <LineChart size={22} className="text-blue-600" />;
      case "shield":
        return <ShieldCheck size={22} className="text-blue-600" />;
      default:
        return <FileText size={22} className="text-blue-600" />;
    }
  };

  return (
    <section id="services" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Our Expertise
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Comprehensive Financial Solutions
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From daily bookkeeping to complex tax litigation, we provide a full
            spectrum of accounting services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-7 mb-6">
                {service.description}
              </p>

              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;