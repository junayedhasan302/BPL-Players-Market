import type { Dispatch, SetStateAction } from "react";

import type { IPlayer } from "../../types/playerType";
import { MAX_PLAYERS } from "../../constants";
import { toast } from "react-toastify";

interface IPlayerCardProps {
  player: IPlayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  selectedCount: number;
}

const PlayerCard = ({
  player,
  coin,
  setCoin,
  setSelectedPlayers,
  selectedCount,
}: IPlayerCardProps) => {
  const isFull = selectedCount >= MAX_PLAYERS;

  // STEP 1: Validate (squad cap, then funds) before committing state changes.
  const handleSelectPlayer = () => {
    if (isFull) {
      toast.error(`You can only select up to ${MAX_PLAYERS} players!`);
      return;
    }
    if (coin < player.price) {
      toast.error("Not enough coins!");
      return;
    }

    toast.success(`${player.playerName} is purchased successfully!`);
    setCoin((prevCoin) => prevCoin - player.price);
    setSelectedPlayers((prev) => [...prev, player]); // functional update — no stale closures
  };

  // STEP 2: Render. Image uses `aspect-[3/2]` (a CSS `aspect-ratio`
  // relative box) + `object-cover` — NEVER a native width/height
  // attribute on the <img>, which is what was breaking zoom scaling.
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition duration-300">
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {player.playerType}
        </span>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-slate-800 text-sm mb-3">
          {player.playerName}
        </h2>

        <div className="mb-2">
          <p className="text-xs font-semibold text-slate-400 mb-1">Batting</p>
          <span className="text-sm text-slate-700">{player.battingStyle}</span>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-400 mb-1">Bowling</p>
          <span className="text-sm text-slate-700">{player.bowlingStyle}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-bold text-slate-800">
            Price ${player.price}
          </span>

          <button
            onClick={handleSelectPlayer}
            disabled={isFull}
            className={`rounded-lg px-4 py-2 text-sm font-bold transition duration-300 ${
              isFull
                ? "cursor-not-allowed bg-gray-400 text-white"
                : "bg-lime-500 hover:bg-lime-600 text-slate-900"
            }`}
          >
            {isFull ? "Squad Full" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
