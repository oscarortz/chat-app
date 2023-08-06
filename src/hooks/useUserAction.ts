import { login, logout } from '../store/user/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispach = useAppDispatch()

  const handleLogin = (data: any) => {
    const {displayName, email, id, photoUrl} = data
    return dispach(login({
      displayName: displayName,
      email: email,
      id: id,
      photoUrl: photoUrl,
    }))
  }
  
  const handleLogout = () => {
    return dispach(logout({
      displayName: '',
      email: '',
      id: '',
      photoUrl: '',
    }))
  }


  return { handleLogin, handleLogout }
}