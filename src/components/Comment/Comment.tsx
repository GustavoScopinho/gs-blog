import * as S from './Comment.styled'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from "react-router-dom";
import { Post } from '../../components/Post/Post.styled';
import { useGetCommentsMutation } from '../../shared/features/api/postsSlice';
import { IComment, IUser } from '../../shared/interface';


export const Comment = () => {
  const { state } = useLocation();

  const [getComments] = useGetCommentsMutation()
  const [comments, setComments]= useState<IComment[] | undefined>()

  useEffect(() => {
    getComments(state)
    .unwrap()
    .then(data => setComments(data))
  },[])


  return (
    <>
  
      { comments?.map((comment: IComment) => {
          return (
            <S.ContainerComment key={comment.id}>
              <S.P>{comment.postId}</S.P>
              <S.P>{comment.id}</S.P>
              <S.P>{comment.name}</S.P>
              <S.P>{comment.email}</S.P>
              <S.P>{comment.body}</S.P>
            </S.ContainerComment>    
          )
        })}

      
    </>
  )
}
