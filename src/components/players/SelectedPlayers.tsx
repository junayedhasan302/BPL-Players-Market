import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/playerType";
import { MAX_PLAYERS } from "../../constants";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

interface ISelectedPlayersProps {
  SelectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  setCoin: Dispatch<SetStateAction<number>>;
  onAddMore: () => void;
}

const SelectedPlayers = ({
  SelectedPlayers,
  setSelectedPlayers,
  setCoin,
  onAddMore,
}: ISelectedPlayersProps) => {
  // STEP 1: Removing refunds the coin, then filters the player out —
  // they automatically reappear in Available since that list is derived.
  const handleRemove = (player: IPlayer) => {
    setCoin((prevCoin) => prevCoin + player.price);
    setSelectedPlayers((prev) =>
      prev.filter((p) => p.playerName !== player.playerName),
    );
    toast.info(`${player.playerName} removed from your squad.`);
  };

  // STEP 2: Empty state.
  if (SelectedPlayers.length === 0) {
    return (
      <div className="text-center text-slate-500 py-10">
        No players selected yet.
        <div className="mt-4">
          <button
            onClick={onAddMore}
            className="bg-lime-400 hover:bg-lime-500 font-bold px-5 py-3 rounded-xl"
          >
            Add More Player
          </button>
        </div>
      </div>
    );
  }

  // STEP 3: List rows + Add More (hidden once the squad is full).
  return (
    <div className="mt-6 flex flex-col gap-4">
      {SelectedPlayers.map((player) => (
        <div
          key={player.playerName}
          className="flex items-center justify-between border border-slate-200 rounded-2xl px-5 py-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={player.playerImg}
              alt={player.playerName}
              className="w-14 h-14 rounded-xl object-cover bg-slate-200"
            />
            <div>
              <h3 className="font-bold text-slate-800">{player.playerName}</h3>
              <p className="text-sm text-slate-400">{player.battingStyle}</p>
            </div>
          </div>

          <button
            onClick={() => handleRemove(player)}
            aria-label={`Remove ${player.playerName}`}
            className="text-red-400 hover:text-red-600 transition"
          >
            <FaTrashCan size={20} />
          </button>
        </div>
      ))}

      {SelectedPlayers.length < MAX_PLAYERS && (
        <button
          onClick={onAddMore}
          className="self-start bg-lime-400 hover:bg-lime-500 font-bold px-5 py-3 rounded-xl mt-2"
        >
          Add More Player
        </button>
      )}
    </div>
  );
};

export default SelectedPlayers;
