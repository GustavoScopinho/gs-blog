import { Comment } from '../../components/Comment/Comment';
import { Header } from '../../components/Header/Header';
import * as S from './Comments.styled'

export const Comments = () => {

  return (
    <>
      <Header/>
      <S.Container>
        <S.H1>
          Comments
        </S.H1>
        <Comment/>
      </S.Container>
    </>
  )
}
