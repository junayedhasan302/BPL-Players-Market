import { Suspense } from "react";
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

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;