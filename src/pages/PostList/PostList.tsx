import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Post } from '../../components/Post/Post'
import * as S from './PostList.styled'

export const PostList = () => {
 
  return (
    <>
    <Header/>
     <S.Container>
        <S.Section>
          <S.H1>
            Last posts
          </S.H1>
          <Post/>
        </S.Section>
     </S.Container>
     <Footer/>
    </>
  )
}
