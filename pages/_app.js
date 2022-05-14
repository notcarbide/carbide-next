import App from 'next/app'
import { Grommet, grommet as grommetTheme,
         Main } from 'grommet'
import NavBar from '../components/header/NavBar'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Grommet theme={grommetTheme} full="min">
        <Main>
          <NavBar />
          <Component {...pageProps} />
        </Main>
      </Grommet>
    )
  }
}
