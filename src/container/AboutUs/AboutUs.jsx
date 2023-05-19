import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding y mandatory-scroll-snapping' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="Grand logo"/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>A notre propos</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img'/>
        <p className='p__opensans'>Chez nous, chaque plat est une œuvre d'art minutieusement préparée par nos talentueux chefs, qui mettent en valeur les saveurs les plus délicates et les ingrédients les plus frais. Notre passion pour la gastronomie se reflète dans chaque assiette.</p>
        <button type="button" className='custom__button'>En savoir plus</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt=""aboout_knife/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Notre histoire</h1>
        <img src={images.spoon} alt='about spoon' className='spoon__img'/>
        <p className='p__opensans'>Depuis son ouverture, notre restaurant gastronomique est devenu une référence incontournable dans le monde de la cuisine. Des débuts modestes à une renommée internationale, notre passion pour l'excellence culinaire et notre engagement envers la qualité ont été récompensés par la fidélité de nos clients.</p>
        <button type="button" className='custom__button'>En savoir plus</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
