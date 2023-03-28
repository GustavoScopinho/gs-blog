import styled from "styled-components";

export const ContainerPost = styled.div`
  background-color: #fff;
  width: 600px;
  height: 100%;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 16px;
  box-shadow: 9px 13px 21px -7px rgba(0,0,0,0.75);

  @media (max-width: 650px) {
    width: 300px;
  }

  h4,p{
    :first-letter { text-transform: capitalize; }
  }
`

export const H4 = styled.h4`
  color: #546E7A;
  margin-bottom: 8px;
  font-size: 16px;
`

export const P = styled.p`
  color: #777777;
  margin-bottom: 8px;
  font-size: 12px;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`

export const Button = styled.button`
  border-radius: 4px;
  padding: 2px;
  font-weight: 500;
  cursor: pointer;

  :hover {
    scale: 1.01;
    background-color: #1F4B77;
    color: #fff;
  }
`
export const ContainerPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;

  @media (max-width: 650px) {
    width: 85%;
  }
`
export const ButtonPagination = styled.button`
  background-color: #fff2;
  color: #fff;
  width: 28px;
  height: 28px;
  margin-bottom: 50px;
  border: 1px solid #fff;
  font-weight: 500;
  border-radius: 2px;
  cursor: pointer;

  :hover{
    scale: 1.03;
  }
`
