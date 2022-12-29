import React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <AppBar>
      <ToolBar>
        <Typography variant="h5" data-testid='header-title'>{title}</Typography>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
