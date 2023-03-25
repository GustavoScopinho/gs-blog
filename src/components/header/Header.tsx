import { Link } from "react-router-dom"
import * as S from "./Header.styled"

export const Header = () => {
  return (
    <>
      <S.Container>
          <S.ContainerHeader>
            <S.ContainerLogo>
              <Link to={{pathname: "/"}} >
                 GS Blog
              </Link>
            </S.ContainerLogo>
            <S.Nav>
              <S.A >
                <Link to={{pathname: "/posts"}} >
                   Posts
                </Link>
              </S.A>
              <S.A>
                <Link to={{pathname: "/users"}} >
                  Users
                </Link>
              </S.A>
            </S.Nav>
          </S.ContainerHeader>
      </S.Container>
    </>
  )
}
