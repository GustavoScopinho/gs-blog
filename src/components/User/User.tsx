import * as S from './User.styled'
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from '../../shared/features/api/usersSlice'
import { IUser } from '../../shared/interface'

export const User = () => {

  const navigate = useNavigate()
  const { data: Users} = useGetUsersQuery()

  return (
    <>
        { Users?.map((user: IUser) => {
          return (
            <S.Container key={user.name}>
            <S.ContainerUsers >
                <S.BoxUser >
                  <S.P>
                    {user.name}
                  </S.P>
                  <S.P>
                    {user.email}
                  </S.P>
                  <S.P>
                    {user.website}
                  </S.P>
                  <S.P>
                    {user.company.name}
                  </S.P>
                  <S.P>
                    {user.company.catchPhrase}
                  </S.P>       
                  <S.Button 
                    onClick={() => {
                      navigate('user-by-id', { state: user.id})
                    }}
                  >More details</S.Button>
                </S.BoxUser>
            </S.ContainerUsers>
            </S.Container>
          )
        })}
    </>
  )
}
