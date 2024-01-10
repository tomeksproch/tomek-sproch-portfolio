import React from 'react'
import MainContent from '../MainContent/MainContent'
import MainImage from '../../atoms/MainImage/MainImage'
import { HeroContentWrapper,BubleClipartSecond, HeroContentStyles } from './HeroSectionContent.styles'
import bubleClipartSvg from '../../../assets/images/adds/ts-svg-9.svg'


const HeroSectionContent = () => {
  return (
    <HeroContentWrapper>
      <BubleClipartSecond src={bubleClipartSvg} />
        <HeroContentStyles>
            <MainContent />
            <MainImage />
        </HeroContentStyles>
  </HeroContentWrapper>
  )
}

export default HeroSectionContent
