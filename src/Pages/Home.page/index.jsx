import React from 'react';
import HeroSections from '../../Component/HeroSection';
import { homeObjFour, homeObjOne, homeObjThird, homeObjTwo} from './data';
import './styleHome.css'

function Home() {
  return (
    <div className={'topHeader'}>
          <HeroSections {...homeObjOne} />
          <HeroSections {...homeObjTwo} />
          <HeroSections {...homeObjThird} />
          <HeroSections {...homeObjFour} />
    </div>
  );
}

export default Home;