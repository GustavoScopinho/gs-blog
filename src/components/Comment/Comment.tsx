import * as S from './Comment.styled'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { useGetCommentsMutation } from '../../shared/features/api/postsSlice';
import { IComment } from '../../shared/interface';
import { SkeletonPost } from '../SkeletonPost/SkeletonPost';


export const Comment = () => {
  const { state } = useLocation();

  const [isLoading, setIsLoading] = useState(false)
  const [getComments] = useGetCommentsMutation()
  const [comments, setComments]= useState<IComment[] | undefined>()

  useEffect(() => {
    setIsLoading(true)
    getComments(state)
    .unwrap()
    .then(data => setComments(data))
    .finally(()=> setIsLoading(false))

  },[])

  return (
    <>
    
       {isLoading ? (<SkeletonPost/>) : (comments?.map((comment: IComment) => {
          return (
            <S.ContainerComment key={comment.id}>
             
                <S.ContainerInfo>
                   <S.P>ID: {comment.id}</S.P>
                   <S.H5>{comment.email}</S.H5>
                   </S.ContainerInfo>
                   <S.ContainerUser>
                <S.H3>{comment.name}</S.H3>
               
             </S.ContainerUser>
              <S.P>{comment.body}</S.P>
            </S.ContainerComment>    
          )
        }))}

    </>
  )
}
