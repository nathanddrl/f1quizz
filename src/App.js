import React, { useState, useEffect } from "react";
import "./App.css";
import Quizz from './components/Quizz'

function App() {
  const [winners, setWinners] = useState({});

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const res = await fetch(
          "http://ergast.com/api/f1/driverStandings/1.json?limit=100"
        );
        const data = await res.json();
        const winners = {};
        data.MRData.StandingsTable.StandingsLists.forEach((season) => {
          winners[season.season] = season.DriverStandings[0].Driver.familyName;
        });
        setWinners(winners);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWinners();
  }, []);

  

  return (
    <div className="App flex h-screen justify-center items-center">
      <Quizz winners={winners}/>
    </div>
  );
}

export default App;
