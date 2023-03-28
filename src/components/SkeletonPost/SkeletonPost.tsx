import React from 'react'
import * as S from './SkeletonPost.styled'

export const SkeletonPost = () => {

  const numberPost = [1,2,3,4,5,6,7,8]

  return (
    <>
      <S.Container>
        {numberPost.map(() => <S.ContainerSkeleton/>)}
      </S.Container>
    </>
  )
}