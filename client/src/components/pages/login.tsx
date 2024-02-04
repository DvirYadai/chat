import styled, { css } from 'styled-components';
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../header';
import { Box, Flex, Text } from '../ui';
import { User, login } from '../../slices/authSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

const FormContainer = styled(Flex)`
  ${({ theme }) => css`
    background: ${theme.colors.main.white};
    width: 300px;
    height: 400px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    align-items: center;
    padding: 20px;
    flex-direction: column;
  `}
`;

export const Input = styled.input`
  ${() => css`
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #a4acb5;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: linear-gradient(90deg, rgba(114, 65, 233, 1) 0%, rgba(180, 53, 245, 1) 65%);
    width: 100%;
    border: none;
    padding: 10px 0px;
    margin-top: 20px;
    border-radius: 20px;
    cursor: pointer;
    color: ${theme.colors.main.white};
    font-size: ${theme.fontSizes[3]};
    font-weight: ${theme.fontWeights[3]};
    margin-bottom: 20px;
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    cursor: pointer;
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${theme.colors.main.black};
    font-size: ${theme.fontSizes[2]};
  `}
`;

export function AuthPage({ children }: { children: ReactNode }) {
  return (
    <Box height="100%" width="100%" fontFamily="Kanit">
      <Header />
      <Flex
        alignItems="center"
        justifyContent="center"
        height="calc(100% - 60px)"
        background="linear-gradient(90deg, rgba(114,65,233,1) 0%, rgba(180,53,245,1) 65%)"
      >
        <FormContainer>{children}</FormContainer>
      </Flex>
    </Box>
  );
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onLogin = async (e: React.FormEvent<HTMLFormElement>, data: User) => {
    e.preventDefault();
    try {
      await dispatch(login(data)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthPage>
      <Text mb="25px" fontWeight={3} fontSize={9}>
        Login
      </Text>
      <form onSubmit={(e) => onLogin(e, { email, password })} style={{ width: '100%' }}>
        <Text fontSize={1}>Email</Text>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Type your email"
          required
        />
        <Text fontSize={1}>Password</Text>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Type your password"
          type="password"
          required
        />
        <Text color="#889098" style={{ cursor: 'pointer' }} fontSize={1} float="right">
          Forgot password?
        </Text>
        <Button>Login</Button>
        <Text textAlign="center" fontSize={1} color="#889098">
          Don&apos;t have an account?
        </Text>
        <StyledLink to="/sign_up">SIGN UP NOW</StyledLink>
      </form>
    </AuthPage>
  );
}
