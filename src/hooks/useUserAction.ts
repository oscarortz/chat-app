import { setDataUser } from '../store/user/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispach = useAppDispatch()

  const setData = (data: any) => {
    console.log(data.photoUrl)
    const {displayName, email, id, photoUrl} = data
    return dispach(setDataUser({
      displayName: displayName,
      email: email,
      id: id,
      photoUrl: photoUrl,
    }))
  }


  return {setData}
}