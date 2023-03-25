import React from 'react'
import { Header } from '../../components/header/Header'
import * as S from './Posts.styled'

export const Posts = () => {
  return (
    <>
      <Header/>
     <S.Container>
        <S.Section>
          <S.H1>
            Last posts
          </S.H1>
          <S.ContainerPost>
            <S.Post>
            sunt aut facere repellat provident occaecati excepturi optio reprehenderit
            </S.Post>
            <S.Post>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
            </S.Post>
          </S.ContainerPost>
        </S.Section>
     </S.Container>
    </>
  )
}
