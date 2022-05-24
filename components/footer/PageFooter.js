import { Box, Button, Footer, Text } from 'grommet'
import { Facebook, Github, Instagram, Spotify,
         Youtube } from 'grommet-icons'

const PageFooter = () => {
  return (
    <Footer
      alignSelf="center"
      direction="column"
      gap="medium"
      pad={{
        top: "medium",
        bottom: "medium",
      }}
    >
      <Box
        direction="row"
        gap="medium"
      >
        <Button
          icon={<Spotify color="brand" />}
          href="https://open.spotify.com/artist/46FMfS2QJiBsbD42BYviN0"
        />
        <Button
         icon={<Facebook color="brand" />}
          href="https://facebook.com/carbideband"
        />
        <Button
          icon={<Instagram  color="brand" />}
          href="https://instagram.com/carbide_band"
        />
        <Button
          icon={<Youtube color="brand" />}
          href="https://youtube.com/channel/UCqQJBHyLgElK4gSFF2d5d-g"
        />
        <Button
          icon={<Github color="brand" />}
          href="https://github.com/carbideband"
        />
      </Box>
      <Text size="small">
        Copyright 2022 BadIn.tel Dev
      </Text>
    </Footer>
  )
}

export default PageFooter;

