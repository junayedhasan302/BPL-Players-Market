import { use, useState } from "react";
import type { IPlayer } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<IPlayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise); // Actual data in here
  // console.log(players);
  const [ButtonType,setButtonType] = useState("Available");
  const handleUpdateButtonType=(type)=>{
    setButtonType(type);
  }
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">{ButtonType === 'Available'? `Available Players` : `Selected PLayers`}</h2>

        <div>
          <button onClick={()=>setButtonType("Available")} className={`btn ${ButtonType==='Available' ? 'btn-success' : ''} rounded-r-none`}>Available</button>

          <button onClick={()=>setButtonType("Selected")} className={`btn  ${ButtonType==='Selected' ? 'btn-success' : ''} rounded-l-none`}>Selected</button>
        </div>
      </div>

      {ButtonType === 'Available' ? <AvailablePlayers players={players} /> : <SelectedPlayers/>}
    </div>
  );
};

export default Players;