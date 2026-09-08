const PlayerCard = ({ player }: { player: IPlayer }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
        />

        <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          {player.playerType}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="mb-3 text-xl font-bold text-slate-800">
          {player.playerName}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-500">
            🏴 {player.origin}
          </span>

          <span className="rounded-lg bg-green-50 px-3 py-1 text-sm font-bold text-green-600">
            ${player.price}
          </span>
        </div>

        <div className="my-5 h-px bg-slate-200" />

        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          Playing Style
        </p>

        <div className="flex justify-between gap-2">
          <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
            {player.battingStyle}
          </span>

          <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
            {player.bowlingStyle}
          </span>
        </div>

        <button className="mt-5 w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg">
          Choose Player →
        </button>

      </div>
    </div>
  );
};

export default PlayerCard;