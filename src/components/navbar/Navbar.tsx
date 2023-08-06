import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavBar } from './Navbar.styles'
import { ButtonLogout } from './ButtonLogout'
import { DialogText } from './DialogText'
import { MessageUser } from './MesaageUser'

export function AppBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/'){
      setOpen(false)
    }
  }, [location])
  
  return (
    <>
      <NavBar>
        <MessageUser/>
        <ButtonLogout onClick={async () => setOpen(!open)}/>
      </NavBar>
      {
        open && <DialogText/>
      }
    </>
  )
}
