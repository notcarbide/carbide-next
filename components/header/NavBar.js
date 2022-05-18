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
        a11yTitle="Open Music Players"
        icon={<Music />}
        onClick={() => header.setShowMusic(true)}
      />
    </Header>
  )
}

export default NavBar;
