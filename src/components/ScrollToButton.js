import React from "react";
import { scrollTo } from "./scrollTo";

const ScrollToButton = ({ toId, toRef, duration, children, className }) => {
 const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

 return (
     <a onClick={handleClick} href="#tab" className={className ? className : "home-tab-menu-item w-inline-block"}>
              <p className="home-tab-menu-item-text txt-body-s">{children}</p>
              <div className="home-tab-menu-item-line"></div>
            </a>
 );
};

export default ScrollToButton;