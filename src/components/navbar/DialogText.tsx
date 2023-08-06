import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { signOut } from '../../firebase/firebase.util'
import { useUserActions } from '../../hooks/useUserAction'
import { ButtonLogout, DialogTextStyles, DialogTextwrapper } from './Navbar.styles'

export function DialogText() {
  const [logout, setLogout] = useState(false)
  const {handleLogout} = useUserActions()

  const handleLogoutApp = () => {
    signOut()
    .then(() => {
      setLogout(true)
      handleLogout()
    })
  .catch((error)=> {console.log(error)})
  }


  return (
    <>
      <DialogTextwrapper>
        <DialogTextStyles>
          <p>Do you want logout ? </p>
          <ButtonLogout onClick={handleLogoutApp}>Logout</ButtonLogout>
        </DialogTextStyles>
      </DialogTextwrapper>
      {logout && <Navigate to='/'/>}
    </>
  )
}
