import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
  $isFocused: boolean
  $hasError: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;

  padding: 0px 16px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  background-color: #232129;
  border-radius: 10px;
  border-width: 2px;
  border-color: #232129;

  ${props =>
    props.$hasError &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.$isFocused &&
    css`
      border-color: #ff9000;
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
