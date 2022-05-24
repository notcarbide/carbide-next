import { Box } from 'grommet'

const Bandcamp = ({ album, id, full }) => {
  const size = full ? "large" : "small"
  const height = full ? "208px" : "42px"
  const args = full && "artwork=small"
  const source = `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=${size}/bgcol=333333/linkcol=0f91ff/transparent=true/${args}`
  const url = `https://carbide.bandcamp.com/album/${album}`
  const style = {
    border: '0',
    width: '100%',
    height,
  }

  return (
    <Box
      alignSelf="center"
      fill
    >
      <iframe
        style={style}
        src={source}
        seamless
      >
        <a href={url}>
          {album} by Carbide
        </a>
      </iframe>
    </Box>
  )
}

export default Bandcamp;
