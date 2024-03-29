import Image from 'next/image'
import { Box, Heading, Text } from 'grommet'
import main from '../assets/main.jpg'

export default function Home() {
  return (
    <Box
      align="center"
      margin={{
        top: "small",
        left: "medium",
        right: "medium",
        bottom: "medium",
      }}
    >
      <Heading>C A R B I D E</Heading>
      <Box>
        <Image
          alt="Main Carbide Image"
          src={main}
          width={360}
          height={360}
        />
      </Box>
    </Box>
  )
}
