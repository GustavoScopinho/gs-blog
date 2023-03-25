import * as S from './Post.styled'
import { useNavigate } from 'react-router-dom'
import { useGetPostsQuery } from '../../shared/features/api/postsSlice'
import { IPost } from '../../shared/interface'

export const Post = () => {

  const navigate = useNavigate()
  const { data: Posts } = useGetPostsQuery()

  return (
    <>
          {Posts?.map((post: IPost) => {
          return(
            <S.ContainerPost key={post.id}>
            <S.Post>
            {post.title}
            </S.Post>
            <S.Post>
            {post.body}
            </S.Post>
            <S.Button 
              onClick={() => {
                navigate('/posts/comments', { state: post.userId})
              }}
            >View more</S.Button>
          </S.ContainerPost>
          )
          })}    
    </>
  )
}
