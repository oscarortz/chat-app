import styled from 'styled-components';
import {COLORPALLET} from '../../constants/colors'

export const WrapperPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORPALLET.BACKGROUND_PAGE} ;
`
export const WrapperComponents = styled.div`
  background: ${COLORPALLET.BACKGROUND_ELEMENTS};
  border: none;
  min-width: 300px;
  max-width: 400px;
  height: 300px;
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 4px 4px ${COLORPALLET.SHADOWS};
`
export const Button = styled.button` 
  margin-top: 10px;
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 6px;
  background: ${COLORPALLET.PRIMARY};
  outline: none;
  border: none;
  &:hover{
    background: ${COLORPALLET.HOOVER};
    cursor: pointer;
  }
`

