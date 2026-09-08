import type { IPlayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }: { players: IPlayer[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-6">
      {players.map((player: IPlayer, index:number) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
