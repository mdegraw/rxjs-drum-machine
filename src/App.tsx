import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import './App.scss';

import Board from './components/board/board.component';

function App() {
  // const prefersDarkMode = true; // TODO: add option to set;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
          primary: {
            main: '#90a4ae',
          },
          secondary: {
            main: '#63d8ce',
          }
        },
      }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <div className='App'>
          <Board />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
