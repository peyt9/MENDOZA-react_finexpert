import React from "react";
import { Calculator } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1c3d] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* logo w/ description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calculator size={20} />
              </div>
              <h2 className="text-lg font-semibold">FinExpert</h2>
            </div>

            <p className="text-gray-400 text-sm leading-6">
              Professional accounting services you can trust. Helping
              businesses grow since 2008.
            </p>
          </div>

          {/* services*/}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Tax Planning</li>
              <li className="hover:text-white cursor-pointer">Bookkeeping</li>
              <li className="hover:text-white cursor-pointer">Audit Support</li>
              <li className="hover:text-white cursor-pointer">Payroll</li>
            </ul>
          </div>

          {/* content highlights */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* policies */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>

        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
          © 2026 FinExpert Accounting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;