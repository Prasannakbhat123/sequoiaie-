import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsChevronRight } from "react-icons/bs";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="navbar__content">
        <Link legacyBehavior href="/services">
          <a>
            <h3 className="navbar__announcment">
              Check out our new offers and new services{" "}
              <BsChevronRight className="announcment__arrow" />
            </h3>
          </a>
        </Link>

        <div className="nav__container">
          <div className="navbar">
            <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <Link legacyBehavior href="/">
                <a style={{ display: 'block', width: '45px', height: '45px', position: 'relative' }}>
                  <Image
                    className="logoimg"
                    src="/img/whiteLogo.jpg"
                    alt="White Logo"
                    width={45}
                    height={45}
                    quality={100}
                    style={{ 
                      borderRadius: '50%', 
                      objectFit: 'cover',
                      width: '45px', 
                      height: '45px',
                      maxWidth: '100%'
                    }}
                  />
                </a>
              </Link>
            </div>

            <div className="navbar__links">
              <Link legacyBehavior href="/">
                <a className="nav__link">Home</a>
              </Link>
              <Link legacyBehavior href="/services">
                <a className="nav__link">Services</a>
              </Link>
              <Link legacyBehavior href="/gallery">
                <a className="nav__link">Gallery</a>
              </Link>
              <Link legacyBehavior href="/contactus">
                <a className="nav__link">Contact Us</a>
              </Link>
              <Link legacyBehavior href="/contactus">
                <a className="nav__link button__red">Get a Quote</a>
              </Link>
            </div>

            {/* Mobile Container */}
            <div className="mobile-container">
              {/* Hamburger Menu */}
              <input
                className="hamburger-menu-checkbox"
                type="checkbox"
                id="hamburger"
              />

              <div className="hamburger-menu">
                <label className="hamburger-menu__label" htmlFor="hamburger">
                  <div className="hamburger-menu__line"></div>
                  <div className="hamburger-menu__line"></div>
                  <div className="hamburger-menu__line"></div>
                </label>
              </div>

              {/* Mobile Menu */}
              <div className="mobile-menu">
                <Link legacyBehavior href="/">
                  <a className="mobile-menu__link">Home</a>
                </Link>
                <Link legacyBehavior href="/services">
                  <a className="mobile-menu__link">Services</a>
                </Link>
                <Link legacyBehavior href="/gallery">
                  <a className="mobile-menu__link">Gallery</a>
                </Link>
                <Link legacyBehavior href="/contactus">
                  <a className="mobile-menu__link">Contact Us</a>
                </Link>
                <Link legacyBehavior href="/contactus">
                  <a className="mobile-menu__link mobile-menu__link--red">
                    Get a Quote
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;