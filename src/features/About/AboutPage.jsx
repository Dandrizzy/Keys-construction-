import HomeActivities from '../Home/HomeActivities';
import About from './About';
import AboutExperience from './AboutExperience';
import AboutIntro from './AboutIntro';
import AboutQuote from './AboutQuote';
import Contact from '../../ui/Contact';

const AboutPage = () => {
 return (
  <>
   <AboutIntro />
   <About />
   <HomeActivities />
   <AboutExperience />
   <AboutQuote />

   <Contact />
  </>
 );
};

export default AboutPage;