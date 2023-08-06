import styled from 'styled-components';
import { COLORPALLET } from '../../constants/colors';

export const NavBar = styled.nav`
  width: 100%;
  background: ${COLORPALLET.PRIMARY};
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 20px;
  background: ${COLORPALLET.BACKGROUND_ELEMENTS};
  border: none;
  cursor: pointer;
  border-radius: 6px;
  &:hover{
    background: ${COLORPALLET.HOOVER}
  }
`
export const ButtonLogout = styled.button`
  width: 100px;
  height: 30px;
  background: ${COLORPALLET.BACKGROUND_ELEMENTS};
  border: none;
  cursor: pointer;
  border-radius: 6px;
  &:hover{
    background: ${COLORPALLET.HOOVER}
  }
`
export const MessageText = styled.div`
  margin-left: 10px;
`
export const DialogTextStyles = styled.div`
  padding: 10px;
  width: 160px;
  height: 100px;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${COLORPALLET.PRIMARY};
  z-index: 1000;
`
export const DialogTextwrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: transparent;
//opacity: 0.1;
`