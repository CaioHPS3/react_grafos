import Menu from "./Menu";
import { Link } from 'react-router-dom'
import "../css/Header.css"

const Header = () => {
  return (
    <header className="header">

      <Link className="header--links" to="/">
        <div className="header__home-link">
          <span className="header__logo">CHEAT SHEET TEORIA DOS GRAFOS</span>
        </div>
      </Link>

      <Menu />
    </header>
  );
};

export default Header;
    