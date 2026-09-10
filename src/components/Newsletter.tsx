import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
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
    <div className="my-10 rounded-3xl bg-gradient-to-r from-sky-100 via-white to-orange-100 py-12 px-4 text-center">
      <h2 className="text-2xl font-extrabold text-slate-800">
        Subscribe to our Newsletter
      </h2>
      <p className="text-slate-500 mt-2 mb-6">
        Get the latest updates and news right in your inbox!
      </p>

      <div className="flex justify-center gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-xl px-4 py-3 border border-slate-200 focus:outline-none"
        />
        <button
          onClick={handleSubscribe}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-5 py-3 rounded-xl transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
