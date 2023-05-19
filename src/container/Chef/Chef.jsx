import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Le mot du chef" />
      <h1 className="headtext__cormorant">Ce en quoi nous croyons</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotes" />
          <p className="p__opensans">
            Pour moi, l’art de recevoir est au cœur des métiers de la
            restauration.  
          </p>
        </div>
        <p className="p__opensans">Donner à nos invités une expérience
            heureuse et enrichissante est ce qui me fait vibrer au jour le jour.
            Le Guerich est pour moi une entité incroyablement généreuse.
            Un lieu attachant, plein de vie et de savoir vivre!</p>
      </div>

      <div className="app__chef-sign">
        <p>Djaffar Merouane</p>
        <p className="p__opensans">Chef de cuisine</p>
        <img src={images.sign} alt="signature"/>
      </div>
    </div>
  </div>
);

export default Chef;
