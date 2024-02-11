import styled, { css } from 'styled-components';
import { Logo } from '../../styles/icons';
import { Flex, Svg, Text } from '../ui';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { logout } from '../../slices/authSlice';

const LogoutButton = styled(Flex)`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${theme.colors.main.white};
    background: linear-gradient(90deg, rgba(114, 65, 233, 1) 0%, rgba(180, 53, 245, 1) 65%);
  `}
`;

export function Header() {
  const dispatch = useAppDispatch();
  const onLogout = async () => {
    await dispatch(logout());
  };

  return (
    <Flex
      position="relative"
      color="main.black"
      justifyContent="space-between"
      height="60px"
      bg="main.white"
      boxShadow="0px 0px 30px -10px rgba(0,0,0,0.3)"
      p="0 25px"
    >
      <Flex alignItems="center" fontSize={5}>
        <Svg as={Logo} height="35px" width="35px" />
        <Text pl="13px">Get Together</Text>
      </Flex>
      <Flex gap="20px" alignItems="center" fontWeight={0}>
        <Text>Pricing</Text>
        <Text>About Us</Text>
        <LogoutButton onClick={() => onLogout()}>Log out</LogoutButton>
      </Flex>
    </Flex>
  );
}
