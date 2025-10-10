import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { PiLinkedinLogoBold } from "react-icons/pi";

export default function Socials() {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.linkedin.com/company/dynamic-space-consulting/"
        className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
        target="_blank"
      >
        <PiLinkedinLogoBold size={20} className="text-primary" />
      </a>
      {/* <a
        href="#"
        className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
      >
        <FaXTwitter size={20} className="text-primary" />
      </a> */}
      <a
        href="https://www.instagram.com/dynamicspaceconsulting/"
        className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
        target="_blank"
      >
        <LuInstagram size={20} className="text-primary" />
      </a>
      <a
        href="https://www.facebook.com/dynamicspaceconsulting/"
        className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
        target="_blank"
      >
        <AiOutlineFacebook size={20} className="text-primary" />
      </a>
    </div>
  );
}
