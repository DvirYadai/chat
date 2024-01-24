import { Logo } from '../../styles/icons';
import { Flex, Svg, Text } from '../ui';

export function Header() {
  return (
    <Flex color="main.white" justifyContent="space-between" height="60px" bg="main.cyanBlue" p="0 25px">
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
