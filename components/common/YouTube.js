import { Box } from 'grommet'

const YouTube = ({ id }) => {
  const source = `https://www.youtube.com/embed/${id}`

  return (
    <Box
      width="large"
      height="medium"
    >
      <iframe
        width="100%"
        height="100%"
        src={source}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </Box>
  )
}

export default YouTube;
