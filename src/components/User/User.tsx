import * as S from './User.styled'
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from '../../shared/features/api/usersSlice'
import { IUser } from '../../shared/interface'

export const User = () => {

  const navigate = useNavigate()
  const { data: Users} = useGetUsersQuery()

  return (
    <>
        
            <S.Container >
                <S.Table>
                    <S.Thead>
                      <S.Th>
                        NAME
                      </S.Th>
                      <S.Th>
                        EMAIL
                      </S.Th>
                      <S.Th>
                        WEBSITE
                      </S.Th>
                      <S.Th>
                        COMPANY
                      </S.Th>
                    </S.Thead>
                    { Users?.map((user: IUser) => {
                        return (
                  <S.Tbody key={user.name}>
                    <S.Td>
                      {user.name}
                    </S.Td>
                    <S.Td>
                      {user.email}
                    </S.Td>
                    <S.Td>
                      {user.website}
                    </S.Td>
                    <S.Td>
                      {user.name}
                    </S.Td>
                    <S.Td>
                    <S.Button 
                        onClick={() => {
                          navigate('/users/details/', { state: user.id})
                        }}
                      >More details</S.Button>
                    </S.Td>
                  </S.Tbody>
                  )
                })}
                </S.Table>
            </S.Container>
          
    </>
  )
}
