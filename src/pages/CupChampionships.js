import React from "react";
import soccerChampionships from "../images/soccer-Championships.jpg";
import { v4 as uuidv4 } from "uuid";
import { Flag } from "semantic-ui-react";

import { useSelector } from "react-redux";

import "./styles/Cups.css";

const countryCodeMap = new Map();
countryCodeMap.set("Argentina", "ar");
countryCodeMap.set("Alemania", "ge");
countryCodeMap.set("Brasil", "br");
countryCodeMap.set("Italia", "it");
countryCodeMap.set("Uruguay", "uy");
countryCodeMap.set("Francia", "fr");
countryCodeMap.set("España", "es");
countryCodeMap.set("Inglaterra", "gb eng");

const cupChampionships = () => {
  const cups = useSelector((state) => state.cups);

  const map = new Map();

  cups.forEach((cup) => {
    if (map.has(cup.champion)) {
      map.set(cup.champion, map.get(cup.champion) + 1);
    } else {
      map.set(cup.champion, 1);
    }
  });

  const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  const result = [];
  mapSort.forEach((value, key) => {
    let country = countryCodeMap.get(key);
    if (country === undefined) country = key.substring(0, 2).toLowerCase();
    result.push(
      <li key={uuidv4()}>
        <Flag name={country} /> {key} {value}
      </li>
    );
  });

  return (
    <React.Fragment>
      <div className="Cups">
        <div className="Cups__hero">
          <div className="Cups__containers">
            <img src={soccerChampionships} alt="Decoration" className="soccer-decoration" />
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Campeonatos Ganados</h1>
        <div className="centerDiv">
          <ul>{result}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default cupChampionships;
