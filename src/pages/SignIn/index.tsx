import React from 'react'
import { Image } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'

import logoImg from '../../assets/logo.png'

import { Container, Title } from './styles'

const SignIn = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Login</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => console.log('Cliquei')}>Enter</Button>
    </Container>
  )
}

export default SignIn
