import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import Logo from "./Logo";
import NavbarButtons from "./NavbarButtons";

export default function Navi() {
  return (
    <div>
      <div className="container">
        <Logo />
        <Content />
        <NavbarButtons />
      </div>
      
    </div>
  );
}
