import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import theme from '../../styles/theme'

const useStyles = makeStyles({
  footer: {
    height: theme.spacing(5),
    borderTop: '1px solid #eaeaea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.footer}>
      <Typography>
        Created By
        <Link href="https://github.com/spinrock/nextjs-template">Spinrock</Link>
      </Typography>
    </Container>
  )
}

export default Footer
