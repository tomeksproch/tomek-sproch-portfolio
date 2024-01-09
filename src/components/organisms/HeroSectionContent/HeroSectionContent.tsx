import React from 'react'
import MainContent from '../MainContent/MainContent'
import MainImage from '../../atoms/MainImage/MainImage'
import { HeroContentWrapper, HeroContentStyles } from './HeroSectionContent.styles'

const HeroSectionContent = () => {
  return (
    <HeroContentWrapper>
        <HeroContentStyles>
            <MainContent />
            <MainImage />
        </HeroContentStyles>
  </HeroContentWrapper>
  )
}

export default HeroSectionContent
