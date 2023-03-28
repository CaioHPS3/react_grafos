import { Link } from 'react-router-dom'
import ReactLogo from '../assets/hourglass.svg'
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__logo-copyright">

        <div className='footer__image-logo'>
          
          <Link to="/">
            <img src={ReactLogo} alt="Countdown Hall Logo"/>
          </Link>

          <div className="footer__logo-copyright">
            <span className="footer__logo">COUNTDOWN HALL</span>
            <p className='footer__copyright-notice'>Copyright © 2023 Countdown Hall</p>
          </div>

        </div>

        <a className="footer--links" href="https://github.com/erarich">Created by Erick Santos</a>

      </div>  

      <div className='footer__list'>
        <Link className="footer--links" to="/about">About</Link>
        <Link className="footer--links" to="/">Download our android app</Link>
        <Link className="footer--links" to="/">Language</Link>
      </div>

      <div className="footer__list">
          <Link className="footer--links" to="/">Privacy Policy</Link>
          <Link className="footer--links" to="/">Cookie Policy</Link>
          <Link className="footer--links" to="/">Copyright Policy</Link>
      </div>   

    </footer>
  );
};

export default Footer;