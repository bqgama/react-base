import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolar sit amet.</Paragrafo>
      <a href="">OIie</a>
    </Container>
  );
}