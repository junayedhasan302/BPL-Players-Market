import { Suspense, useState } from "react";
import type { IPlayer } from "./types/playerType";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Players from "./components/players/Players";

const playersFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const playersPromise = playersFetch();

  const [coin, setCoin] = useState(2000);

  return (
    <>
      <Nav coin={coin} />

      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;