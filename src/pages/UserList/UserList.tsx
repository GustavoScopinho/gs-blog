import { Header } from '../../components/Header/Header'
import { User } from '../../components/User/User'
import * as S from './UserList.styled'

export const UserList = () => {
  return (
    <>
      <Header/>
      <S.Container>
        <User/>
      </S.Container>
    </>
  )
}
