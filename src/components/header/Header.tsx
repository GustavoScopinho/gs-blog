import * as S from "./Header.styled"

export const Header = () => {
  return (
    <>
      <S.Container>
          <S.ContainerHeader>
            <S.ContainerLogo>
              GS Blog
            </S.ContainerLogo>
            <S.Nav>
              <S.A>
                Posts
              </S.A>
              <S.A>
                Users
              </S.A>
            </S.Nav>
          </S.ContainerHeader>
      </S.Container>
    </>
  )
}
