import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: calc(100vh - 101px);
  background-color: #2B63D9;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Section = styled.section`
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1100px) {
    flex-direction: column;
    
  }
`
export const H1 = styled.h1`
color: #fff;
font-size: 55px;

@media (max-width: 1100px) {
  font-size: 48px;
  }

  @media (max-width: 480px) {
  font-size: 32px;
  }
`
export const ContainerTitle = styled.div`
  width: 40%;
 
  @media (max-width: 1100px) {
    width: 90%;
  }
`
export const ContainerLottie = styled.div`
  width: 800px;
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
    width: 480px;
  }
`