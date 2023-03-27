import styled from "styled-components";

export const ContainerComment = styled.div`
  background-color: #fff;
  width: 600px;
  height: 100%;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 16px;
  box-shadow: 9px 13px 21px -7px rgba(0,0,0,0.65);

  h3,h4,p {
    :first-letter { text-transform: capitalize; }
  }
`

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerInfo = styled.div`
  width: 100%;
  height: 30%;
  background-color: #dcdce5;
  display: flex;
  gap: 10px;
  border-radius: 4px;
  padding: 2px 4px;
`

export const H3 = styled.h4`
  color: #546E7A;

`
export const P = styled.p`
  color: #777779;
  font-size: 12px;
`
export const H5 = styled.h5``