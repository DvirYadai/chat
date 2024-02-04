import React, { useState } from 'react';
import { Text } from '../ui';
import { AuthPage, Button, Input, StyledLink } from './login';
import { NewUser, register } from '../../slices/authSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onRegister = async (e: React.FormEvent<HTMLFormElement>, data: NewUser) => {
    e.preventDefault();
    try {
      await dispatch(register(data)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthPage>
      <Text mb="25px" fontWeight={3} fontSize={9}>
        Sign Up
      </Text>
      <form onSubmit={(e) => onRegister(e, { email, username, password })} style={{ width: '100%' }}>
        <Text fontSize={1}>Email</Text>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="Type your email"
          required
        />
        <Text fontSize={1}>Username</Text>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          placeholder="Type your username"
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
        <Button type="submit">Sign Up</Button>
        <Text textAlign="center" fontSize={1} color="#889098">
          Already have an account?
        </Text>
        <StyledLink to="/login">LOGIN NOW</StyledLink>
      </form>
    </AuthPage>
  );
}
