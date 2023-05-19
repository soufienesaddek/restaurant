import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Rue des calendres, 24, Alger</p>
        <p className="p__opensans">+213 6 555 555</p>
        <p className="p__opensans">+213 23 15 25 26</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La meilleure façon de se retrouver est de se perdre au service des autres.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaires</h1>
        <p className="p__opensans">Dimanche-Jeudi:</p>
        <p className="p__opensans">10:00 - 02:00 </p>
        <p className="p__opensans">Vendredi-Samedi:</p>
        <p className="p__opensans">10:00 - 03:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Sparkle Dev. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;