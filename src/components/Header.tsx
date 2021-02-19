import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <AppBar>
      <ToolBar>
        <Typography variant="h5">{title}</Typography>
      </ToolBar>
    </AppBar>
  )
}

export default Header
