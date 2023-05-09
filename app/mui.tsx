"use client";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/styles/theme';

const MuiRegistry = ({
    children,
  }: {
    children: JSX.Element;
  }) => (
    <ThemeProvider theme={theme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			{children}
		</ThemeProvider>
);

export default MuiRegistry;
