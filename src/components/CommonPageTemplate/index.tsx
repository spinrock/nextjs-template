import React from 'react';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
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
