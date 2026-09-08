import Logo from "../assets/logo.png";
import { FaSackDollar } from "react-icons/fa6";

interface NavProps {
  coin: number;
}

const Nav = ({ coin }: NavProps) => {
  return (
    <nav className="bg-green-500">
      <div className="flex justify-between items-center container mx-auto">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedule</li>
        </ul>

        <h2 className="font-bold text-2xl text-black flex gap-1 items-center">
          <FaSackDollar />
          {coin}
        </h2>
      </div>
    </nav>
  );
};

export default Nav;