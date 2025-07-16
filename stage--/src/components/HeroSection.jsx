import React from "react";
import "./HeroSection.css";
import woman from "../assets/woman.png";
import men from "../assets/men.png";
import svg from "../assets/svg/svg1.svg";
import Avis from "../assets/svg/svg4.svg";
import arrow from "../assets/svg/svg2.svg";
import layout from "../assets/svg/svg5.svg";
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
         <svg
    className="svg-horizontal-line"
    width="508"
    height="6"
    viewBox="0 0 508 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="508"
      height="6"
      rx="3"
      transform="matrix(-1 0 0 1 508 0)"
      fill="url(#paint0_linear_135_19)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_135_19"
        x1="0"
        y1="3"
        x2="508"
        y2="3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="#58BD7D" />
      </linearGradient>
    </defs>
  </svg>
        <h1>
          <span className="highlight">Nous aidons les</span><br />
          <span className="highlight underline">Entreprises à innover</span><br />
          Et à se développer
        </h1>
        <svg
    className="svg-curve"
    width="343"
    height="15"
    viewBox="0 0 343 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M340 3.00003C208.393 14.6882 134.607 15.3078 2.99999 3"
      stroke="#58BD7D"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
  
        <p className="description" style={{fontSize:"20px",lineHeight:"1.7",marginTop:"24px",fontWeight:"400",color:"#7b7b93",maxWidth:"90%"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  enim ad minim veniam, quis nostrud.
        </p>
        <button className="collab-btn">
          COLLABORONS ENSEMBLE
          <span className="arrow-circle">
            <img src={svg} alt="Flèche"  style={{ width: "15.72px", height: "15.72px" }}/>
          </span>
        </button>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src={woman} alt="Femme" className="main-img" />
        </div>
        <div className="rating-box">
        <img src={Avis} alt="svg"/>
        </div>
      </div>
      <div className="arrow-hall">
          <img src={arrow} alt="fleche"/>
        </div>
    </section>
  );
}
export default HeroSection;

