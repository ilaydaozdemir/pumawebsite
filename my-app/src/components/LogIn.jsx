import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LoginPicture from "../assets/Login/LoginPic.png";
import Logo from "../assets/Logo.png";

const LogIn = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <MainContainer>
          <MinLogo>
            <img src={Logo} width="340px" />
          </MinLogo>
          <MainContent>
            <div style={{ marginBottom: "34px" }}>
              <Text>E-MAIL</Text>
              <GlobalInput />
            </div>
            <div style={{ marginBottom: "48px" }}>
              <Text>PASSWORD</Text>
              <GlobalInput />
            </div>
            <SignInButton onClick={() => navigate("/home")}>
              SIGN IN
            </SignInButton>
          </MainContent>

          <SignUpContainer>
            <div
              style={{ fontSize: "12px", opacity: "0.7", marginRight: "20px" }}
            >
              Don't you have an account?
            </div>
            <div
              style={{ fontSize: "12px", fontWeight: "600", opacity: "0.8" }}
            >
              Sign Up
            </div>
          </SignUpContainer>
          <Footer>
            <div>©2022.PUMA Company | All Rights Reserved.</div>
            <div style={{ marginLeft: "16px", marginTop: "7px" }}>
              Privacy Statement <span> . </span> Privacy Statement{" "}
            </div>
          </Footer>
        </MainContainer>
        <LogaContainer>
          <img
            src={LoginPicture}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </LogaContainer>
      </Container>
    </div>
  );
};
export const Container = styled.div`
  font-family: "Inter";
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: 156px;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    margin-left: 156px;
  }
`;
export const MainContainer = styled.div`
  @media (min-width: 768px) {
    visibility: visible;
  }
  @media (min-width: 1024px) {
    visibility: visible;
  }
`;

export const MinLogo = styled.div`
  margin-left: 40px;
  margin-top: 80px;
  @media (min-width: 768px) {
    visibility: visible;
    margin-left: 26px;
  }
  @media (min-width: 1024px) {
    visibility: visible;
    margin-left: 26px;
  }
`;

export const MainContent = styled.div`
  margin-left: 24px;
  margin-top: 100px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
  @media (min-width: 1024px) {
    margin-top: 40px;
  }
`;

export const Text = styled.div`
  font-weight: 600;
  text-align: left;
  font-size: 12px;
  letter-spacing: 3.12px;
  opacity: 0.8;
  margin-bottom: 10px;
`;
export const GlobalInput = styled.input`
  height: 48px;
  width: 383px;
  border: 1px solid #dfdfe9;
`;
export const SignInButton = styled.button`
  border: 1px solid #d7d7ec;
  width: 383px;
  height: 48px;
  background-color: black;
  color: white;
  letter-spacing: 3.12px;
  &:hover {
    cursor: pointer;
  }
`;
export const SignUpContainer = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Footer = styled.div`
  color: #898995;
  font-size: 12px;
  margin-top: 195px;
  margin-left: 100px;
  margin-bottom: 93px;
  opacity: 0.7;
  @media (min-width: 768px) {
    margin-top: 67px;
  }
  @media (min-width: 1024px) {
    margin-top: 67px;
  }
`;

export const LogaContainer = styled.div`
  visibility: hidden;
  @media (min-width: 768px) {
    visibility: visible;
    margin-left: 136px;
  }
  @media (min-width: 1024px) {
    visibility: visible;
    margin-left: 136px;
  }
`;

export default LogIn;
