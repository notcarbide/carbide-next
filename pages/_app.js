import App from 'next/app'
import { Grommet, Main } from 'grommet'
import carbide from '../theme/carbide'
import NavBar from '../components/header/NavBar'

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
          <NavBar />
          <Component {...pageProps} />
        </Main>
      </Grommet>
    )
  }
}
