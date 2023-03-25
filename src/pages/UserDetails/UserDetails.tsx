import * as S from './UserDetails.styled'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserByIdMutation } from '../../shared/features/api/usersSlice';
import { IUser } from '../../shared/interface';
import { Header } from '../../components/Header/Header';

export const UserDetails = () => {
  const { state } = useLocation();

  const [getUser] = useGetUserByIdMutation()
  const [user, setUser]= useState<IUser | undefined>()

  useEffect(() => {
    getUser(state)
    .unwrap()
    .then(data => setUser(data))
  },[])

  return (
    <>
      <Header/>
        <S.Container>
            <S.ContainerUser key={user?.id}>
            <S.BoxName>
            <S.P>{user?.id}</S.P>
            <S.P>{user?.name}</S.P>
            <S.P>{user?.username}</S.P>
            </S.BoxName>
            <S.Adress>
              <S.P>{user?.address.street}</S.P>
              <S.P>{user?.address.suite}</S.P>
              <S.P>{user?.address.city}</S.P>
              <S.P>{user?.address.zipcode}</S.P>
            </S.Adress>
            <S.BoxInfo>
              <S.P>{user?.phone}</S.P>
              <S.P>{user?.website}</S.P>
            </S.BoxInfo>
            <S.BoxCompany>
              <S.P>{user?.company.name}</S.P>
              <S.P>{user?.company.catchPhrase}</S.P>
              <S.P>{user?.company.bs}</S.P>
            </S.BoxCompany>
          </S.ContainerUser>
        </S.Container>
    </>
  )
}
