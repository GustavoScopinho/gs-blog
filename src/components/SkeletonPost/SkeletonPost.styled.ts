import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
`

export const ContainerSkeleton = styled.div`
  background-color: #eeeeee96;
  width: 600px;
  height: 100px;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 16px;
  
  @media (max-width: 650px) {
    width: 450px;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`
