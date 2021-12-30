import React, { createRef, useEffect } from 'react'

// import lottie
import lottie from 'lottie-web';


// import animation data
import animationData from './rift-logo-data.json';

const HeroLogo = (props) => {
  let animationContainer = createRef();
  let anim = null;

  useEffect(() => {
    anim = lottie.loadAnimation({
    container: animationContainer.current,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      progressiveLoad: true,
    }
    });
    anim.play();
    }, []);

    return (
      <div id="hero-logo" className="animation-container-logo trigger" ref={animationContainer} />
    )
}
export default HeroLogo;
