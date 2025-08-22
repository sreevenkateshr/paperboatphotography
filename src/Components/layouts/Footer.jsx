import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 items-center text-center gap-10">
        
        {/* Get in Touch */}
        <div className="flex flex-col items-center">
          <h4 className="font-['Derivia'] text-2xl mb-4 tracking-wide">GET IN TOUCH</h4>
          <p className="text-sm font-['Spectral']">
            PAPERBOATPHOTOGRAPHY.IN@GMAIL.COM
          </p>
        </div>

        {/* Logo & Quote */}
        <div className="flex flex-col items-center">
          <a href="/" className="mb-3">
            <img
              src="/logo/pbblack.png"
              alt="Logo"
              className="h-20 mx-auto select-none pointer-events-none"
            />
          </a>
          <p className="italic font-['Spectral'] text-sm max-w-sm">
            "Every frame holds a story. On your special day, we capture moments that last a lifetime."
          </p>
        </div>

        {/* Connect Us */}
        <div className="flex flex-col items-center">
          <h4 className="font-['Derivia'] text-2xl mb-4 tracking-wide">CONNECT US</h4>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.instagram.com/paperboatphotography.in/"
              className="transition-colors duration-300 hover:text-[#E1306C]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/194hGb7YSV/"
              className="transition-colors duration-300 hover:text-[#1877F2]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://pin.it/Tiw7FmzFK"
              className="transition-colors duration-300 hover:text-[#E60023]"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-4">
        <p className="text-center text-sm font-['Spectral']">
          Copyright &copy; Paperboat 2025 - All rights reserved | Developed by{" "}
          <a
            href="https://sherlin-ag.netlify.app/"
            className="text-pink-600 hover:underline"
          >
            Sherlin A G
          </a>
        </p>
      </div>
    </footer>
  );
}
