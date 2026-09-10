import { Suspense, useState, useMemo } from "react";
import type { IPlayer } from "./types/playerType";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Players from "./components/players/Players";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Container from "./components/layout/Container";
import { STARTING_COIN, FREE_CREDIT } from "./constants";
import { toast } from "react-toastify";

// STEP 1: Fetch all players once. useMemo (not calling the function
// directly in the component body) is REQUIRED here — calling
// playersFetch() on every render would create a brand new Promise each
// time `coin` changes, which breaks React's `use()` + Suspense contract
// and silently re-fetches data.json over and over.
const playersFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  // STEP 2: App owns the two pieces of state that are shared across
  // sibling components — coin balance and the cached fetch promise.
  const playersPromise = useMemo(() => playersFetch(), []);
  const [coin, setCoin] = useState(STARTING_COIN);
  const [claimed, setClaimed] = useState(false);

  // STEP 3: Handler passed down to Banner — kept in App because it
  // mutates the same `coin` state Nav also reads.
  const handleClaimCredit = () => {
    if (claimed) {
      toast.info("You've already claimed your free credit!");
      return;
    }
    setCoin((prev) => prev + FREE_CREDIT);
    setClaimed(true);
    toast.success(`+${FREE_CREDIT} coins claimed!`);
  };

  // STEP 4: Compose the page. Nav and Footer render full-bleed
  // (their own background color spans edge-to-edge); Container is
  // applied INSIDE them so only the content lines up, matching how
  // real marketing sites are built.
  return (
    <>
      <Nav coin={coin} />

      <Container>
        <Banner onClaimCredit={handleClaimCredit} />

        <Suspense fallback={<h2 className="text-center py-20">Loading...</h2>}>
          <Players
            playersPromise={playersPromise}
            coin={coin}
            setCoin={setCoin}
          />
        </Suspense>

        <Newsletter />
      </Container>

      <Footer />
    </>
  );
}

export default App;
