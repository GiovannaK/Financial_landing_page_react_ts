import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./styles";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                to="about"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                to="discover"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                to="services"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                to="signup"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
