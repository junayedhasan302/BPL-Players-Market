import type { Dispatch, SetStateAction } from "react";

import type { IPlayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
  players: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
      {players.map((player) => (
        <PlayerCard
          key={player.playerName}
          player={player}
          coin={coin}
          setCoin={setCoin}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;