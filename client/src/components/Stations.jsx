import { useEffect, useState } from "react";

const Stations = ({ token }) => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchStations = async () => {
      const result = await fetch("/api/stations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await result.json();

      setStations(data);
    };

    fetchStations();
  }, []);

  const formatStation = (station) => {
    return (
      <div key={`Train_${station.id}`}>
        <h2>Station {station.id}</h2>
        <ul>
          <li>{station.name}</li>
          <li>City: {station.city}</li>
          <li>State: {station.state}</li>
          <li>Capacity: {station.capacity}</li>
        </ul>
      </div>
    );
  };

  return (
    <section className="info">
      {stations.map((station) => {
        return formatStation(station);
      })}
    </section>
  );
};

export default Stations;
