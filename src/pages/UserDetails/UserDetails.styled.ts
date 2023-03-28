import styled from "styled-components";

export const Container = styled.div`
  background: -webkit-linear-gradient(top, #1F4A76, #4EBFE9);
  background: -moz-linear-gradient(top, #1F4A76, #4EBFE9);
  background: linear-gradient(to bottom, #1F4A76, #4EBFE9);
  width: 100%;
  min-height: calc(100vh - 101px);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerIcon = styled.div`
  margin-bottom: 30px;

  display: flex;
  justify-content: center;

  img{
    width: 100px;

    @media (max-width: 600px) {
    width: 80px;
  }
 }
  `

export const ContainerUser = styled.div`
  background-color: #fff;
  width: 550px;
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 9px 13px 21px -7px rgba(0,0,0,0.75);

  @media (max-width: 600px) {
    width: 350px;
    padding: 10px 5px;
  }
  `
export const ContainerInfo = styled.div`
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 8px;
    padding: 5px;
  `

export const BoxName = styled.div`
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const ContainerTitle = styled.div``

export const H3 = styled.h3`
  color: #546E7A;
  margin-bottom: 30px;
`

export const H4 = styled.h4`
  text-align: center;
  margin-bottom: 10px;
`

export const P = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
`

export const Adress = styled.div`
  display: flex;
  gap: 10px;
`

export const BoxInfo = styled.div`
display: flex;
justify-content: space-between;
`

export const BoxCompany = styled.div``