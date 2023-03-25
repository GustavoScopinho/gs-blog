
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetCommentsMutation } from '../../shared/features/api/postsSlice';
import { IUser } from '../../shared/interface';
import * as S from './User.styled'

export const User = () => {

  // const { state } = useLocation();

  // const [getComments] = useGetCommentsMutation()
  // const [user, setUser]= useState<IUser[] | undefined>()

  // useEffect(() => {
  //   getComments(state)
  //   .unwrap()
  //   .then(data => setComments(data))
  // },[])

  return (
    <>
      <S.Container>
        <S.ContainerUsers>
          <S.ContainerUser>
            <S.P>
              Nome
            </S.P>
            <S.P>
              Email
            </S.P>
            <S.P>
              Website
            </S.P>
            <S.P>
              Company
            </S.P>
            <S.P>
              catchPhrase
            </S.P>       
          </S.ContainerUser>
        </S.ContainerUsers>
      </S.Container>
    </>
  )
}
