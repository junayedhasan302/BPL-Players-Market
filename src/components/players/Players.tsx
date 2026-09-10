import { use, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { IPlayer } from "../../types/playerType";
import { MAX_PLAYERS } from "../../constants";

import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  // STEP 1: Suspend until the players promise resolves.
  const players = use(playersPromise);

  // STEP 2: Local UI state — which tab is active, and the "squad" list.
  // SelectedPlayersList is the single source of truth: Available is
  // just players NOT in this list (derived below), never a separate copy.
  const [ButtonType, setButtonType] = useState<"Available" | "Selected">(
    "Available",
  );
  const [SelectedPlayersList, setSelectedPlayers] = useState<IPlayer[]>([]);

  // STEP 3: Derive the Available list every render — no separate state
  // to keep in sync, no risk of Available/Selected drifting apart.
  const availablePlayers = players.filter(
    (player) =>
      !SelectedPlayersList.some(
        (selected) => selected.playerName === player.playerName,
      ),
  );

  // STEP 4: Render tab header + whichever list is active.
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center gap-4 mb-2">
        <h2 className="font-bold text-xl">
          {ButtonType === "Available"
            ? "Available Players"
            : `Selected Player (${SelectedPlayersList.length}/${MAX_PLAYERS})`}
        </h2>

        <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
          <button
            onClick={() => setButtonType("Available")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              ButtonType === "Available"
                ? "bg-lime-400 text-black"
                : "text-gray-500"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setButtonType("Selected")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              ButtonType === "Selected"
                ? "bg-lime-400 text-black"
                : "text-gray-500"
            }`}
          >
            Selected ({SelectedPlayersList.length})
          </button>
        </div>
      </div>

      {ButtonType === "Available" ? (
        <AvailablePlayers
          players={availablePlayers}
          coin={coin}
          setCoin={setCoin}
          setSelectedPlayers={setSelectedPlayers}
          selectedCount={SelectedPlayersList.length}
        />
      ) : (
        <SelectedPlayers
          SelectedPlayers={SelectedPlayersList}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          onAddMore={() => setButtonType("Available")}
        />
      )}
    </div>
  );
};

export default Players;
