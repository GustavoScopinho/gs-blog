import * as S from './UserDetails.styled'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserByIdMutation } from '../../shared/features/api/usersSlice';
import { IUser } from '../../shared/interface';
import { Header } from '../../components/Header/Header';
import UserIcon from '../../assets/icon-user.png'
import { Footer } from '../../components/Footer/Footer';

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
            <S.ContainerIcon>
              <img src={UserIcon} alt="" />
            </S.ContainerIcon>
            <S.BoxName>
              <S.H3>{user?.name}.</S.H3>
              <S.H3>({user?.username})</S.H3>
            </S.BoxName>
            <S.ContainerTitle>
              <S.H4>
                Adress:
              </S.H4>
            </S.ContainerTitle>
          <S.ContainerInfo>
            <S.Adress>
              <S.P>Street: {user?.address.street}</S.P>
              <S.P>{user?.address.suite},</S.P>
              <S.P>City: {user?.address.city},</S.P>
              <S.P>Zipcode: {user?.address.zipcode}</S.P>
            </S.Adress>
            <S.BoxInfo>
              <S.P>Phone: {user?.phone}</S.P>
              <S.P>Website: {user?.website}</S.P>
            </S.BoxInfo>
            <S.BoxCompany>
              <S.P>Company: {user?.company.name}</S.P>
              <S.P>Catch Phrase: {user?.company.catchPhrase}</S.P>
              <S.P> {user?.company.bs}</S.P>
            </S.BoxCompany>
          </S.ContainerInfo>
          </S.ContainerUser>
        </S.Container>
        <Footer/>
    </>
  )
}
