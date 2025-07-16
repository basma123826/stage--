import React from 'react'
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import ExperienceSection from './components/ExperienceSection';

const App = () => {
  return (
    <div> 
      <Header />
      <HeroSection/>
      <Feature/>
      <ExperienceSection/>
    </div>
  );
}
export default App;
