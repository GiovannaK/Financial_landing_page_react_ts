import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap,
} from "./styles";

type SideBarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const SideBar = ({ isOpen, toggle }: SideBarProps) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};
