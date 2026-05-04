import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Left */}
        <div>
          <p className="text-sm mb-4">
            © 2026 Nature Nook. Բոլոր իրավունքները պաշտպանված են։
          </p>
          <div className="flex gap-3">
            <img src="/visa.png" alt="visa" className="h-6" />
            <img src="/mastercard.png" alt="mc" className="h-6" />
            <img src="/paypal.png" alt="paypal" className="h-6" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Ընկերություն</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Մեր մասին</a></li>
            <li><a href="#">Կապ</a></li>
            <li><a href="#">Աշխատանք</a></li>
            <li><a href="#">Քաղաքականություն</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-3">Օգնություն</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Ինչպես գնել</a></li>
            <li><a href="#">Վճարման պայմաններ</a></li>
            <li><a href="#">Առաքում</a></li>
            <li><a href="#">Երաշխիք</a></li>
          </ul>
        </div>

        {/* Info + Social */}
        <div>
          <h4 className="font-semibold mb-3">Օգտակար</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li><a href="#">Բլոգ</a></li>
            <li><a href="#">Հաճախ տրվող հարցեր</a></li>
            <li><a href="#">Բրենդներ</a></li>
          </ul>

          <div className="flex gap-3">
            <div className="w-9 h-9 bg-blue-500 rounded-full"></div>
            <div className="w-9 h-9 bg-sky-400 rounded-full"></div>
            <div className="w-9 h-9 bg-red-500 rounded-full"></div>
            <div className="w-9 h-9 bg-orange-500 rounded-full"></div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;