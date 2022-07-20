/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./burgermenu.scss";
import { NavLink } from "react-router-dom";

export default function MenuBurger() {
  const [showBurger, setShowBurger] = useState(false);
  const [crateVisible, setCrateVisible] = useState();

  const toggleBurger = () => {
    setShowBurger(true);
    setCrateVisible(close);

    if (setShowBurger === true) {
      setShowBurger(false);
    } else if (crateVisible === close) {
      setCrateVisible();
      setShowBurger(false);
    }
  };

  const Burger = (props) => {
    return (
      <div className={`burgerslide ${props.show ? "active" : ""}`}>
        {props.children}
      </div>
    );
  };
  const BurgerBody = (props) => {
    return <div className="modal__body ">{props.children}</div>;
  };

  return (
    <nav>
      <div className="mobile-container">
        <div className="mobile-burgerlogo--position">
          <button
            src={crateVisible}
            alt="Menu burger"
            className="button-burger"
            onClick={toggleBurger}
          />
        </div>
      </div>
      <div className="slider-mobile">
        <Burger show={showBurger}>
          <BurgerBody>
            <ul className="ul-burger">
              <div>
                <li>
                  <NavLink
                    to="/"
                    className={(nav) =>
                      nav.isActive ? "burgerslide-active" : undefined
                    }
                  >
                    <div className="mobile-icon-container">
                      <p>Accueil</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className={(nav) =>
                      nav.isActive ? "burgerslide-active" : undefined
                    }
                  >
                    <div className="mobile-icon-container">
                      <p>Projet</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={(nav) =>
                      nav.isActive ? "burgerslide-active" : undefined
                    }
                  >
                    <div className="mobile-icon-container">
                      <p>Contact</p>
                    </div>
                  </NavLink>
                </li>
              </div>
            </ul>
          </BurgerBody>
        </Burger>
      </div>
    </nav>
  );
}
