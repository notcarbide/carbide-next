import App from 'next/app'
import { Box, Grommet, Main } from 'grommet'
import carbide from '../theme/carbide'
import MusicLayer from '../components/header/MusicLayer'
import NavBar from '../components/header/NavBar'
import NavBarMenu from '../components/header//NavBarMenu'
import PageFooter from '../components/footer/PageFooter'
import { HeaderProvider } from '../context/header'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Grommet
        theme={carbide}
        themeMode="dark"
        full="min"
      >
        <Main>
          <HeaderProvider>
            <NavBar />
            <NavBarMenu />
            <MusicLayer />
          </HeaderProvider>
          <Box fill>
            <Component {...pageProps} />
          </Box>
          <PageFooter />
        </Main>
      </Grommet>
    )
  }
}
