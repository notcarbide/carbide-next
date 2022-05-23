import { useState } from 'react'
import { Button, Header } from 'grommet'
import { Menu, Music } from 'grommet-icons'
import LogoIcon from '../../assets/LogoIcon'
import { useHeaderContext } from '../../context/header'

const NavBar = () => {
  const header = useHeaderContext()

  return (
    <Header
      background="dark-1"
      height="60px"
      border={{
        color: "brand",
        side: "bottom",
      }}
    >
      <Button
        a11yTitle="Menu"
        icon={<Menu />}
        onClick={() => header.setShowMenu(true)}
      />
      <LogoIcon size="large" />
      <Button
        a11yTitle="Latest Music from Carbide"
        icon={
          <Music
            color={header.state.showmusic && "brand"}
          />
        }
        onClick={() => header.setShowMusic(!header.state.showmusic)}
      />
    </Header>
  )
}

export default NavBar;
