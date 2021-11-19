import { React } from 'react';
import {Image,Text} from 'react-native';
/* import Logo from '../../assets/logo.png'; */
import {Container} from './styles';

const Header = () =>{
  return(
    <Container>
      {/* <Image source={Logo} /> */}
      <Text>Olá</Text>
    </Container>
  );
};

export default Header;