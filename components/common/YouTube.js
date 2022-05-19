const YouTube = ({ id }) => {
  const source = `https://www.youtube.com/embed/${id}`

  if (!source)
    return (<div>Loading...</div>)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={source}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  )
}

export default YouTube;
