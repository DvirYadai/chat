import { Logo } from '../../styles/icons';
import { Flex, Svg, Text } from '../ui';

export function Header() {
  return (
    <Flex color="main.white" alignItems="center" fontSize={3} height="60px" bg="main.cyanBlue" pl="25px">
      <Svg as={Logo} height="35px" width="35px" />
      <Text pl="13px">Get Together</Text>
    </Flex>
  );
}
