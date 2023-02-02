import "./NavBar.css";
import nav from "./nav.json";
import { useState } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      { window.innerWidth >= window.innerHeight &&
        <div className="NavBar">
        {nav.components.map((anchor) => (
          <a href={anchor.id}>{anchor.name}</a>
        ))}
        </div>
      }
      {
        window.innerWidth < window.innerHeight &&
        <div className="NavButtonBar">
          <button className="NavButton" onClick={() => setExpanded(!expanded)}>
            <img src="Burger.webp" alt="Menu"/>
          </button>
        </div>
      }
      {
        window.innerWidth < window.innerHeight && expanded &&
        <div className="NavBurger">
          {nav.components.map((anchor) => (
          <a href={anchor.id} onClick={() => setExpanded(false)}>{anchor.name}</a>
          ))}
        </div>
      }
    </div>
  );
}