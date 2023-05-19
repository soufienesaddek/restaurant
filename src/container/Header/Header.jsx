import {images} from "../../constants"
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Recherchez de nouvelles saveurs" />
      <h1 className="app__header-h1">La clé pour d'un bon repas</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Savourez l'excellence culinaire dans un cadre enchanteur&nbsp;: un voyage gastronomique inoubliable !</p>
      <button type="button" className="custom__button">Découvrez le menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image"/>
    </div>
  </div>
);

export default Header;
