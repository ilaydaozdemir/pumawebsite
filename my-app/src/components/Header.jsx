import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import styled from "styled-components";
import HeaderPumaLogo from "../assets/HeaderPumaLogo.png";
import CartLogo from "../assets/cart.png";
const Header = (props) => {
  return (
    <div>
      <Container>
        <IconContainer>
          <MenuRoundedIcon />
        </IconContainer>
        <div>
          <img src={HeaderPumaLogo} width="82px" height="42px" />
        </div>
        <IconContainer>
          <img src={CartLogo} width="36px" height="42px" />
        </IconContainer>
      </Container>
    </div>
  );
};
export default Header;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 28px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`;
export const IconContainer = styled.div`
  margin-top: 9px;
`;
