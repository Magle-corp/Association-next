// Imports.
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { Article, Aside } from '@magle-corp/design-system';
// Custom.
import { Header } from '../../src/block';
import { Main } from '../../src/component';

const StyledArticle = styled(Article)`
  margin-right: 35px;
`;

const Articles: NextPage = () => {
  return (
    <>
      <Header />
      <Main>
        <p>prout</p>
        <StyledArticle />
        <Aside />
      </Main>
    </>
  );
};

export default Articles;
