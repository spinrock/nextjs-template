import React from 'react'
import { styled } from '@mui/system'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const StyledContainer = styled(Container)(() => ({
  height: '40px',
  borderTop: '1px solid #eaeaea',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const Footer: React.FC = () => (
  <StyledContainer>
    <Typography data-testid="footer-message">
      Created By
      <Link
        href="https://github.com/spinrock/nextjs-template"
        data-testid="footer-link"
      >
        Spinrock
      </Link>
    </Typography>
  </StyledContainer>
)

export default Footer
