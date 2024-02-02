import React from "react";

const Hero = () => {
  const orderNow = () => {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  };
  return (
    <section
      className="hero section"
      id="home"
      style={{ backgroundImage: `url(./media/bg-hero.png)` }}
    >
      <h1 className="hero__title">
        Indulge in blissful mornings <br />
        With Favorite Coffee <br />
        And Cozy Place.
      </h1>
      <button className="hero__button" onClick={orderNow}>
        Order Now
      </button>
    </section>
  );
};

export default Hero;
