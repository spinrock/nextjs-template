import React from 'react';
import { styled } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const StyledContainer = styled(Container)((theme) => ({
  height: '40px',
  borderTop: '1px solid #eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Footer: React.FC = () => (
  <StyledContainer>
    <Typography>
      Created By
      <Link href="https://github.com/spinrock/nextjs-template">Spinrock</Link>
    </Typography>
  </StyledContainer>
);

export default Footer;
