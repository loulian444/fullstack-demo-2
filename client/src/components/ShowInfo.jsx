import { useState } from "react";
import Trains from "./Trains";
import Stations from "./Stations";

const ShowInfo = ({ token }) => {
  const [showTrains, setShowTrains] = useState(false);
  const [showStations, setShowStations] = useState(false);

  return (
    <>
      <br />
      <br />
      <button onClick={() => setShowTrains(!showTrains)}>Show Trains</button>
      <button onClick={() => setShowStations(!showStations)}>
        Show Stations
      </button>

      <section id="infoSection">
        {showTrains ? <Trains token={token} /> : null}
        {showStations ? <Stations token={token} /> : null}
      </section>
    </>
  );
};

export default ShowInfo;
