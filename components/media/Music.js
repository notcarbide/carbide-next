import { Box } from 'grommet'
import TitleText from '../common/TitleText'
import Bandcamp from '../common/Bandcamp'

const Music = () => {
  return(
    <Box>
      <TitleText>Homer's Wrecking Crew 2021</TitleText>
      <Bandcamp
        id="2524029209"
        album="homers-wrecking-crew"
        full
      />

      <TitleText>Dracula Don't Suck 2019</TitleText>
      <Bandcamp
        id="893622569"
        album="dracula-dont-suck"
        full
      />

      <TitleText>House Of Snakes 2018</TitleText>
      <Bandcamp
        id="1814967126"
        album="house-of-snakes"
        full
      />
    </Box>
  )
}

export default Music;
