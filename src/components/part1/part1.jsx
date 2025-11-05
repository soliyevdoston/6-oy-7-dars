import React from "react";
import sedansImg from "../../assets/sedans.svg";
import styled from "styled-components";

export default function Part1() {
  return (
    <Container>
      <Img src={sedansImg} alt="" />
      <Title>SEDANS</Title>
      <Text>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </Text>
      <Button>Learn More</Button>
    </Container>
  );
}
export const Container = styled.div`
  background-color: #e28625;
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
  color: #e28625;
  width: 146px;
  height: 48px;
  border-radius: 25px;
  &:active {
    background-color: #e28625;
    color: #f2f2f2;
    border: 2px solid #f2f2f2;
  }
  @media (max-width: 758px) {
    width: 110px;
    height: 39px;
    margin-left: 30px;
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
`;
export const Title = styled.h1`
  padding-bottom: 10px;
  padding-left: 48px;
  color: #f2f2f2;
  font-size: 40px;
  @media (max-width: 758px) {
    padding-left: 30px;
  }
`;
export const Text = styled.p`
  width: 212px;
  line-height: 25px;
  padding-bottom: 60px;
  padding-left: 48px;
  opacity: 70%;
  color: #ffffff;
  font-size: 15px;
  @media (max-width: 845px) {
    width: 180px;
  }
  @media (max-width: 758px) {
    padding-left: 29.5px;
  }
`;
