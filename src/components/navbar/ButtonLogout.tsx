import { Button } from './Navbar.styles'
interface Props {
  onClick : () => {}
}

export function ButtonLogout({onClick}: Props) {

  return (
      <Button onClick={onClick}>Logout</Button>
  )
}
