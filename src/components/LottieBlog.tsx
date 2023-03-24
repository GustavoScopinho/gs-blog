import React from 'react'
import Lottie from 'react-lottie'
import BlogLottie from '../assets/LottieJson/lottie-blog.json'

export const LottieBlog = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: BlogLottie
    }
  return <Lottie options={defaultOptions}  />
}
