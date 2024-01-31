import { Text } from '../ui';
import { AuthPage, Button, Input, StyledLink } from './login';

export function SignUp() {
  return (
    <AuthPage>
      <Text mb="25px" fontWeight={3} fontSize={9}>
        Sign Up
      </Text>
      <form style={{ width: '100%' }}>
        <Text fontSize={1}>Email</Text>
        <Input id="email" placeholder="Type your email" />
        <Text fontSize={1}>Username</Text>
        <Input id="username" placeholder="Type your username" />
        <Text fontSize={1}>Password</Text>
        <Input id="password" placeholder="Type your password" />
        <Button>Sign Up</Button>
        <Text textAlign="center" fontSize={1} color="#889098">
          Already have an account?
        </Text>
        <StyledLink to="/login">LOGIN NOW</StyledLink>
      </form>
    </AuthPage>
  );
}
