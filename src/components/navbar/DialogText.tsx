import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { signOut } from '../../firebase/firebase.util'
import { ButtonLogout, DialogTextStyles, DialogTextwrapper } from './Navbar.styles'

export function DialogText() {
  const [logout, setLogout] = useState(false)

  const handleLogout = () => {
    signOut()
    .then(() => {
      setLogout(true)
    })
  .catch((error)=> {console.log(error)})
  }


  return (
    <>
      <DialogTextwrapper>
        <DialogTextStyles>
          <p>Do you want logout ? </p>
          <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        </DialogTextStyles>
      </DialogTextwrapper>
      {logout && <Navigate to='/'/>}
    </>
  )
}
