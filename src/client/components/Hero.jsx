// import React from 'react';
// type HeroProps = {
//   handleGetStarted: () => void;
// };
// const Hero:React.FC<HeroProps> = ({ handleGetStarted }) => {
//   return (
//     // <div>
//     //   <h1>Welcome to our recipe generator!</h1>
//     // </div>
//     <div className="hero-container">
//       <div className="overlay">
//         <h1 className="hero-text">Welcome to our Recipe Generator!</h1>
//         <p className="hero-subtext">Discover and create amazing recipes with ease.</p>
//         <button className="hero-button" onClick={handleGetStarted}>Get Started</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = ({ handleGetStarted }) => {
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1 className="hero-text">Welcome to our Recipe Generator!</h1>
        <p className="hero-subtext">Discover and create amazing recipes with ease.</p>
        <button className="hero-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

