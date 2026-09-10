import { useState } from "react";
import { toast } from "react-toastify";
import Logo from "../assets/logo.png";
import Container from "./layout/Container";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      toast.error("Please enter a valid email!");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-6 mt-10 ">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-bold text-white mb-3">About Us</h3>
          <p className="text-sm text-slate-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2 text-slate-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white mb-3">Subscribe</h3>
          <p className="text-sm text-slate-00 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex gap-2 justify-center md:justify-start ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded-lg bg-white px-3 py-2 text-sm text-black placeholder:text-black-200 border border-pink-400-200 focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Container>

      <div className="flex flex-col items-center mt-10">
        <img src={Logo} alt="Logo" className="h-20 w-auto mb-4" />
        <p className="text-xs text-slate-500">
          © 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
