import React from 'react';
import { GlobalStyles } from './global/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import Meet from './meet/Meet'

const theme = {
  colors: {
    primary: '#002B55',
    primaryDarker: '#001b36',
    secondary: '#80C565',
    secondaryDarker: '#70a85a'
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header></Header>
      <Layout>
        <Meet />
      </Layout>
      <Footer></Footer>
    </ThemeProvider>
  );
}

const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const Header = styled.header`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
`

const Footer = styled.footer`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
`

export default App;
