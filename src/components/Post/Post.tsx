import * as S from './Post.styled'
import { useNavigate } from 'react-router-dom'
import { useGetPostsMutation } from '../../shared/features/api/postsSlice'
import { IPost} from '../../shared/interface'
import { useEffect, useState } from 'react'


export const Post = () => {

  const navigate = useNavigate()
  
  const [getPosts] = useGetPostsMutation()
  const [posts, setPosts]= useState<IPost[]>([])
  const [postPerPage, setPostPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(posts.length / postPerPage)
  const startIndex = currentPage * postPerPage;
  const endIndex = startIndex + postPerPage;
  const currentItens = posts?.slice(startIndex, endIndex)

  useEffect(() => {
    getPosts()
    .unwrap()
    .then(data => setPosts(data))

  },[])

  return (
    <>
         <S.ContainerPagination>
          {Array.from(Array(pages), (posts, index) => {
            return <S.ButtonPagination value={index} onClick={(e: any) => setCurrentPage(Number(e.target.value))}>{index + 1}</S.ButtonPagination>
                })}
         </S.ContainerPagination>
          {currentItens?.map((post: IPost) => {
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
