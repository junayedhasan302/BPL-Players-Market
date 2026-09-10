import type { Dispatch, SetStateAction } from "react";

import type { IPlayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  selectedCount: number;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  setSelectedPlayers,
  selectedCount,
}: AvailablePlayersProps) => {
  // STEP 1: Pure layout — a responsive grid. `grid-cols-*` uses fractional
  // (fr) track sizing, not fixed px, so the whole grid reflows correctly
  // at every breakpoint AND under browser zoom.
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {players.map((player) => (
        <PlayerCard
          key={player.playerName}
          player={player}
          coin={coin}
          setCoin={setCoin}
          setSelectedPlayers={setSelectedPlayers}
          selectedCount={selectedCount}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
