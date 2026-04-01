import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* content  */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Let&apos;s Discuss Your Finances
          </h2>

          <p className="text-gray-500 max-w-md leading-7 mb-8">
            Ready to take the first step towards financial clarity? Fill out the
            form and our team will reach out within 24 hours.
          </p>

    {/* content information */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Phone className="text-blue-600" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <p className="text-gray-500 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <Mail className="text-blue-600" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="text-gray-500 text-sm">contact@finexpert.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                <MapPin className="text-blue-600" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Office</h4>
                <p className="text-gray-500 text-sm leading-6">
                  100 Financial District, Suite 403
                  <br />
                  New York, NY 10005
                </p>
              </div>
            </div>
          </div>
        </div>

       
       {/* contact form */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Service Interest
              </label>
              <select className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 bg-white">
                <option>Tax Preparation</option>
                <option>Financial Analysis</option>
                <option>Audit Defense</option>
                <option>Bookkeeping</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

             {/* send message button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;