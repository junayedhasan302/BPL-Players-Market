import BgShadow from "../assets/bg-shadow.png";
import BannerMain from "../assets/banner-main.png";

interface BannerProps {
  onClaimCredit: () => void;
}

// STEP 1: Two-layer banner, matching the reference design:
//   Layer 1 (bg-shadow.png)   -> full-bleed ambient background glow
//   Layer 2 (banner-main.png) -> the centered cricket illustration
// Both are laid out with Tailwind's `inset-0`/`object-cover`, which are
// relative (%-based) positioning — this is what makes the banner scale
// correctly under browser zoom instead of holding a fixed pixel size.
const Banner = ({ onClaimCredit }: BannerProps) => {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl my-7 min-h-[420px] flex flex-col items-center justify-center text-center px-4">
      {/* Background glow layer */}
      <img
        src={BgShadow}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Foreground illustration */}
      <img
        src={BannerMain}
        alt="Cricket"
        className="w-40 md:w-56 h-auto mb-4"
      />

      <h1 className="text-white text-3xl md:text-5xl font-extrabold max-w-2xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <p className="text-slate-300 mt-3 mb-6">
        Beyond Boundaries, Beyond Limits
      </p>

      <button
        onClick={onClaimCredit}
        className="bg-gradient-to-r from-pink-400 to-orange-300 text-slate-900 font-bold px-6 py-3 rounded-xl hover:opacity-90 transition"
      >
        Claim Free Credit
      </button>
    </div>
  );
};

export default Banner;
