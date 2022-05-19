import { Anchor, Box, Heading, Paragraph } from 'grommet'

export default function About() {
  return (
    <Box
      alignSelf="center"
      width="large"
      pad={{
        top: "small",
        bottom: "small",
        left: "medium",
        right: "medium",
      }}
    >
      <Box>
        <Heading>About</Heading>
      </Box>
      <Box>
        <Paragraph fill>
          Formed in 2017, Carbide is a band based in Houston, Texas.
          Although their sound is deeply rooted in the aggressive, fast-paced
          edge of punk rock, they also love to experiment with many tiers of
          ideas and tones, since they don’t really like to get stuck into any
          given category of songwriting.<br/>
          <br/>
          Carbide’s sound is soaring and abrasive, yet melodic and ingenious,
          with driven, yet kaleidoscopic arrangements.<br/>
          <br/>
          From the hellish thump of Death From Above 1979, to the angular
          riffs of Fugazi and Adolescents, to the screaming grit of Megadeth,
          anything goes. The sound of this group is very raw and energetic,
          yet it is also richly nuanced, giving listeners a deeper outlook on
          the line-up’s broad and diverse taste for music. <br/>
          <br/>
          The Carbide brand is made in collaboration with {' '}
          <Anchor href="https://badin.tel/">BadIn.tel</Anchor>.
        </Paragraph>
      </Box>
    </Box>
  )
}
