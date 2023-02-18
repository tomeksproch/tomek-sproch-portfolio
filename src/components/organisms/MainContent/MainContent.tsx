import React from 'react';
import MainHeroText from '../../atoms/MainHeroText/MainHeroText';
import MainTittle from '../../atoms/MainTittle/MainTittle';
import { MainContentArticle } from './MainContent styles';

const MainContent = () => {
  return (
    <MainContentArticle>
      <MainTittle />
      <MainHeroText />
    </MainContentArticle>
  );
};

export default MainContent;
