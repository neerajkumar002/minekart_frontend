import { Facebook, Instagram, Twitter } from "lucide-react";

const About = () => {
  return (
    <div className=" flex flex-col gap-3">
      <h1 className="font-bold text-3xl">MineKart</h1>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
      </p>
      <div className="flex gap-5 items-center">
        <Facebook className="bg-white text-black w-10 h-10  p-2 rounded-full" />
        <Instagram className="bg-white text-black w-10 h-10  p-2 rounded-full" />
        <Twitter className="bg-white text-black w-10 h-10  p-2 rounded-full" />
      </div>
    </div>
  );
};

const FooterRightContent = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-3">
        <h3 className="font-bold">Company</h3>
        <p className="text-gray-400">About</p>
        <p className="text-gray-400">Contact us</p>
        <p className="text-gray-400">Support</p>
        <p className="text-gray-400">Careers</p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold">Quick Link</h3>
        <p className="text-gray-400">Share Location</p>
        <p className="text-gray-400">Orders Tracking</p>
        <p className="text-gray-400">Size Guide</p>
        <p className="text-gray-400">FAQs</p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold">Legal</h3>
        <p className="text-gray-400">Terms & conditions</p>
        <p className="text-gray-400">Privacy Policy</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white flex justify-between px-32 py-20">
      <About />
      <FooterRightContent />
    </div>
  );
};

export default Footer;
