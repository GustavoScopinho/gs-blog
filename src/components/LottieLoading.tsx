import React from 'react'
import Lottie from 'react-lottie'
import LoadingLottie from '../assets/LottieJson/lottie-loading.json'

export const LottieLoading = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: LoadingLottie
    }
  return <Lottie options={defaultOptions} width={'100px'} />
}
