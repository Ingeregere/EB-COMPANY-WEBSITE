import React from 'react';
import HeroSections from '../../Component/HeroSection';
import { homeObjOne, homeObjTwo} from './data';
import '../Home.page/styleHome.css'

function NosProduitsPage() {
  return (
    <div className={'topHeader'}>
          <HeroSections {...homeObjOne} />
          <HeroSections {...homeObjTwo} />
    </div>
  );
}

export default NosProduitsPage;