import styled from "styled-components";

export const ContainerPost = styled.div`
  background-color: #fff2;
  width: 600px;
  height: 140px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
`

export const Post = styled.div`
  color: #fff;
  margin-bottom: 8px;
`

export const Button = styled.button`
  background-color: #fff2;
`
export const ContainerPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
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
