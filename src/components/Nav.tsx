import Logo from "../assets/logo.png";
import { FaSackDollar } from "react-icons/fa6";
import Container from "./layout/Container";

interface NavProps {
  coin: number;
}

const Nav = ({ coin }: NavProps) => {
  // STEP 1: Nav only ever reads `coin` — it never writes to it.
  return (
    <nav className="bg-[#9ae600] border-b border-slate-100 sticky top-0 z-50">
      {/* STEP 2: Container handles the max-width + padding — no
          bespoke spacing classes here anymore. */}
      <Container className="flex justify-between items-center py-4">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        <ul className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
          <li className="hover:text-slate-900 cursor-pointer">Home</li>
          <li className="hover:text-slate-900 cursor-pointer">Fixture</li>
          <li className="hover:text-slate-900 cursor-pointer">Teams</li>
          <li className="hover:text-slate-900 cursor-pointer">Schedules</li>
        </ul>

        <div className="flex items-center gap-2 bg-slate-900 text-white rounded-full px-4 py-2 text-sm font-bold">
          {coin} Coin
          <FaSackDollar className="text-yellow-400" />
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
