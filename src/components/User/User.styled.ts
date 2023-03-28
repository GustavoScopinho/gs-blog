import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  overflow-x: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: block;
    margin: 20px;
  }
`
export const P = styled.p`
  color: #fff;
  margin-bottom: 8px;
`
export const Button = styled.button`
  background-color: inherit;
  padding: 8px 6px;
  border-radius: 5px;
  border: 1px solid #1F4A76 ;
  cursor: pointer;
  font-weight: 500;

  :hover{
    scale: 1.01;
    background-color: #1F4A76;
    color: #fff;
  }

  @media (max-width: 650px) {
    padding: 2px;
  }
`
export const Table = styled.table`
  width: 80;
  border-radius: 10px;
  padding: 40px 60px;
  background-color: #edf2fc;

  @media (max-width: 800px) {
    width: 90%;
    padding: 10px 15px;
  }

`
export const Thead = styled.thead`

`
export const Th = styled.th`
`
export const Tbody = styled.tbody`
`
export const Td = styled.td`
  border-bottom: 1px solid #1F4A76;
  padding: 12px 0;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 12px;
  }
`