import styled from 'styled-components';
import { GroupIcon, MessageIcon, PhoneIcon, SettingsIcon } from '../../styles/icons';
import { Box, Flex, Svg } from '../ui';

const StyledSvg = styled(Svg)`
  cursor: pointer;
  &:hover {
    path {
      fill: url(#myGradient);
    }
  }
`;

function Menu() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      boxShadow="0px 0px 30px -10px rgba(0,0,0,0.3)"
      height="55px"
      bg="main.white"
      p="0 10px"
    >
      <StyledSvg as={MessageIcon} />
      <StyledSvg as={PhoneIcon} />
      <StyledSvg as={GroupIcon} />
      <StyledSvg as={SettingsIcon} />
    </Flex>
  );
}

export function Sidebar() {
  return (
    <Box width="250px" height="calc(100% - 60px)" bg="#f8fafc">
      <Menu />
    </Box>
  );
}
