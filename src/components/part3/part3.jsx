import React from "react";
import styled from "styled-components";
import luxuryImg from "../../assets/luxury.svg";
export default function Part3() {
  return (
    <Container>
      <Img src={luxuryImg} alt="" />
      <Title>LUXURY</Title>
      <Text>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </Text>
      <Button>Learn More</Button>
    </Container>
  );
}
export const Container = styled.div`
  background-color: #004140;
  width: 307px;
  height: 500px;
  @media (max-width: 925px) {
    width: 280px;
  }
  @media (max-width: 845px) {
    width: 250px;
  }
  @media (max-width: 758px) {
    width: 230px;
  }
  @media (max-width: 700px) {
    width: 307px;
  }
`;
export const Button = styled.button`
  margin-left: 48px;

  font-size: 15px;
  background-color: #f2f2f2;
  color: #004140;
  width: 146px;
  height: 48px;
  border-radius: 25px;
  &:active {
    background-color: #004140;
    color: #f2f2f2;
    border: 2px solid #f2f2f2;
  }
  @media (max-width: 758px) {
    width: 110px;
    height: 39px;
    margin-left: 30px;
  }
  @media (max-width: 700px) {
    width: 146px;
    margin-left: 48px;
  }
`;
export const Img = styled.img`
  padding-left: 48px;
  padding-top: 48px;
  width: 64px;
  height: 40px;
  @media (max-width: 758px) {
    padding-left: 30px;
  }
  @media (max-width: 700px) {
    padding-left: 48px;
  }
`;
export const Title = styled.h1`
  padding-bottom: 10px;
  padding-left: 48px;
  color: #f2f2f2;
  font-size: 40px;
  @media (max-width: 758px) {
    padding-left: 30px;
  }
  @media (max-width: 700px) {
    padding-left: 48px;
  }
`;
export const Text = styled.p`
  line-height: 25px;
  letter-spacing: 0px;
  width: 212px;
  padding-bottom: 60px;
  padding-left: 47.5px;
  color: #ffffff;
  opacity: 70%;
  font-size: 15px;
  @media (max-width: 845px) {
    width: 180px;
    padding-bottom: 35px;
  }
  @media (max-width: 758px) {
    padding-left: 29.5px;
  }
  @media (max-width: 700px) {
    padding-left: 47.5px;
  }
`;
