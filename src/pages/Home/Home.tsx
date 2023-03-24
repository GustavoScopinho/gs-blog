import { Header } from "../../components/header/Header"
import { LottieBlog } from "../../components/LottieBlog"
import * as S from "./Home.styled"

export const Home = () => {
  return (
    <>
     <Header/>
      <S.Container>
        <S.Section>
          <S.ContainerTitle>
            <S.H1>
            Here you will find the best posts
            </S.H1>
          </S.ContainerTitle>
          <S.ContainerLottie>
            <LottieBlog/>
          </S.ContainerLottie>
        </S.Section>
      </S.Container>
    </>
  )
}
