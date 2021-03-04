import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={Theme} >
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Router />
        <Footer />
      </Wrapper>
    </>
    </ThemeProvider>
  );
}

export default App;
