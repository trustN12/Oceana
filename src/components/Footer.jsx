import { FaHackerrank, FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const socialLinks = [
  
  { href: "https://wa.me/09679188394", icon: <FaWhatsapp /> },
  { href: "https://www.youtube.com/@algo-bot", icon: <FaYoutube /> },
  { href: "https://www.hackerrank.com/profile/academyshreyn12", icon: <FaHackerrank /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-blue-400 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Nabarun 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;