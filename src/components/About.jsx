import React from "react";
import aboutData from "../aboutData.json";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const getStatColor = (value) => {
    if (value === "15+") return "text-sky-400";
    if (value === "$2M+") return "text-emerald-400";
    if (value === "500+") return "text-fuchsia-400";
    if (value === "100%") return "text-orange-400";
    return "text-sky-400";
  };

  return (
    <section className="relative overflow-hidden bg-[#08152f] py-16 px-6">
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#07152f] via-[#081a3a] to-[#0e2758]">
      </div>

      
      <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl">
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
     <div>


                {/* content */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Partner With FinExpert?
          </h2>

          <p className="text-slate-300 text-sm leading-6 max-w-md mb-6">
            We believe in proactive accounting. Instead of just reporting what
            happened, we help you plan for what&apos;s next. Our team of CPAs
            and financial advisors are dedicated to your success.
          </p>

          <ul className="space-y-3">
            {aboutData.features.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white text-sm">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

    
        <div className="grid grid-cols-2 gap-4">
          {aboutData.stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 shadow-sm"
            >
              <h3 className={`text-3xl font-bold mb-1 ${getStatColor(stat.value)}`}>
                {stat.value}
              </h3>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;