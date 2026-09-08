import { use, useState, type Dispatch, type SetStateAction } from "react";

import type { IPlayer } from "../../types/playerType";

import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);

  const [ButtonType, setButtonType] = useState("Available");

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">Available Players</h2>

        <div>
          <button
            onClick={() => setButtonType("Available")}
            className={`btn ${
              ButtonType === "Available" ? "btn-success" : ""
            } rounded-r-none`}
          >
            Available
          </button>

          <button
            onClick={() => setButtonType("Selected")}
            className={`btn ${
              ButtonType === "Selected" ? "btn-success" : ""
            } rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>

      <AvailablePlayers
        players={players}
        coin={coin}
        setCoin={setCoin}
      />
    </div>
  );
};

export default Players;