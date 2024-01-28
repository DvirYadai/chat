import { Logo } from '../../styles/icons';
import { Flex, Svg, Text } from '../ui';

export function Header() {
  return (
    <Flex
      color="main.black"
      justifyContent="space-between"
      height="60px"
      bg="main.white"
      boxShadow="0px 0px 25px -10px rgba(0,0,0,0.3)"
      p="0 25px"
    >
      <Flex alignItems="center" fontSize={5}>
        <Svg as={Logo} height="35px" width="35px" />
        <Text pl="13px">Get Together</Text>
      </Flex>
      <Flex alignItems="center" fontWeight={0}>
        <Text pr="20px">Pricing</Text>
        <Text>About Us</Text>
      </Flex>
    </Flex>
  );
}
