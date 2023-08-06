import {ButtonGoogle} from '../components/loginPage/ButtonGoogle';
import { WrapperComponents, WrapperPage } from '../components/loginPage/LoginPage.styles';
import { WelcomeMessage } from '../components/loginPage/WelcomeMessage';

export default function LoginPage() {


  return (
    <WrapperPage>
      <WrapperComponents>
        <WelcomeMessage/>
        <ButtonGoogle/>
      </WrapperComponents>
    </WrapperPage>
  )
}
