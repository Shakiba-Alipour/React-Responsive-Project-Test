import "./Navbar.css";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Button } from "@mui/material";

const NavbarItems = [
  {
    key: "home",
    label: "Home",
    to: "home-section",
  },
  {
    key: "service",
    label: "Service",
    to: "service-section",
  },
  {
    key: "feature",
    label: "Feature",
    to: "feature-section",
  },
  {
    key: "product",
    label: "Poduct",
    to: "product-section",
  },
  {
    key: "testimonial",
    label: "Testimonial",
    to: "testimonial-section",
  },
  {
    key: "faq",
    label: "FAQ",
    to: "faq-section",
  },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 780);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header id="navbar">
      <Link href="/" id="logo-holder" underline="none">
        <Logo id="logo" />
        <h2 id="name">Nexcent</h2>
      </Link>

      <div id="menu-holder">
        <ul id="menu">
          {NavbarItems.map((item) => (
            <li className="menu-item" key={item.key}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {isMobile ? <MobileNavbarManagement /> : <DesktopNavbarManagement />}
    </header>
  );
}

function MobileNavbarManagement() {
  //   return (
  //     <div id="menu-holder">
  //       <ul id="menu">
  //         {NavbarItems.map((item) => (
  //           <li className="nav-link" key={item.key}>
  //             {item.label}
  //           </li>
  //         ))}
  //       </ul>
  //       <div id="sign-in-holder">
  //         <Button id="login" variant="text">
  //           Login
  //         </Button>
  //         <Button id="sign-up" variant="contained">
  //           Sign up
  //         </Button>
  //       </div>
  //     </div>
  //   );
}

function DesktopNavbarManagement() {
  return (
    <div id="sign-in-holder">
      <Button className="button" id="login" variant="text">
        Login
      </Button>
      <Button className="button" id="sign-up" variant="contained">
        Sign up
      </Button>
    </div>
  );
}
