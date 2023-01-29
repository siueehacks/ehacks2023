import "./NavBar.css";
import nav from "./nav.json";

export default function Navbar() {
  return (
    <div className="NavBar">
        {nav.components.map((anchor) => (
          <a href={anchor.id}>{anchor.name}</a>
        ))}
    </div>
  );
}