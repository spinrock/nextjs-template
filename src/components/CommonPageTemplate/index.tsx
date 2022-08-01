import React from 'react';
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';

const StyledContainer = styled(Container)(() => ({
  padding: 0,
}));

const StyledBox = styled(Box)(() => ({
  paddingTop: '60px',
}));

const CommonPageTemplate: React.FC = ({ children }) => (
  <StyledContainer>
    <Header title="This is Next.js Template" />
    <StyledBox m={0}>
      {children}
    </StyledBox>
    <Footer />
  </StyledContainer>
);

export default CommonPageTemplate;
