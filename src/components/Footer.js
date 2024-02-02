import React from "react";
import facebook_img from "../assets/icon-facebook.svg";
import twitter_img from "../assets/icon-twitter.svg";
import insta_img from "../assets/icon-instagram.svg";
import outline_img from "../assets/bx-right-arrow-alt.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Coffee<span>.</span>Home
        </h1>
        <p className="footer__description">
          The best place to work <br />
          and be more productive.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              Example lang muna City <br />
              Philippines.
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +123456789 <br />
              examplelangmuna@email.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
          <div className="footer__data">
            <p className="footer__newsletter-description">
              Subscribe to our newsletter
            </p>

            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
              />
              <button className="footer__button">
                <img src={outline_img} className="bx" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="#" target="_blank" className="footer__social-link">
              <img src={facebook_img} className="bx" alt="" />
            </a>
            <a href="#" target="_blank" className="footer__social-link">
              <img src={insta_img} className="bx" alt="" />
            </a>
            <a href="#" target="_blank" className="footer__social-link">
              <img src={twitter_img} className="bx" alt="" />
            </a>
          </ul>

          <span className="footer__copy"> &#169; Rollin,Lanz,Ken </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
