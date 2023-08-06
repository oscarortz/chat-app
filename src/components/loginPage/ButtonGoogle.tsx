import { UserCredential } from 'firebase/auth'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { COLLECTIONS } from '../../constants/collections'
import { getDocumentWithId, setDocument, signInWithGoogle } from '../../firebase/firebase.util'
import { useUserActions } from '../../hooks/useUserAction'
import { Google } from '../../logo-google/GoogleLogo'
import { Button } from './LoginPage.styles'


export function ButtonGoogle() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const { handleLogin} = useUserActions()

  const handleLoginWithGoole = async () => {
    await signInWithGoogle()
    .then((res)=> verificationAndUserRegistration(res)) 
    .catch((error) => console.log('error', error))
  }

  const verificationAndUserRegistration = async (userData: UserCredential) =>{
    const { email, displayName, photoURL } = userData.user
    console.log(userData.user)
    if(email){
      const userExist = await getDocumentWithId(COLLECTIONS.USERS, email)
      if(userExist){
        handleLogin(userExist)
        setUserLoggedIn(true)
      } else {
        await setDocument(COLLECTIONS.USERS, email, { email, displayName, photoURL})
        .then((res) => {
          console.log(res)
          handleLogin(res)
          setUserLoggedIn(true)
        })
        .catch(error => console.log(error)) 
      }
    } 
  }

  return (
    <Button onClick={handleLoginWithGoole}>
      <Google/>
      <p>Login with google</p>
      {userLoggedIn && <Navigate to='/home' />}
    </Button>
  )
}
