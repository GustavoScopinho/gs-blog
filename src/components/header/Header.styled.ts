import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #1F4A76;
  height: 100px;
  border-bottom: 1px solid #B1CCFB;

  display: flex;
  justify-content: center;
  align-items: center;

  a{
    text-decoration-line: none;
    color: #fff;
    
    :hover{
      color: #4DBBE5;
    }   
  }
`
export const ContainerHeader = styled.div`
  width: 70%;

  display: flex;
  justify-content: space-between;
`
export const ContainerLogo = styled.h1``

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`
export const A = styled.a`
  color: #fff;
`
