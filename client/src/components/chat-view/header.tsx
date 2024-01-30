import styled from 'styled-components';
import { Box, Flex, Text } from '../ui';
import { Avatar } from '../ui/avatar';
import { EllipsisIcon, PhoneIcon, VideoIcon } from '../../styles/icons';
import { StyledSvg } from '../sidebar/sidebar';

const StyledAvatar = styled(Avatar)`
  height: 42px;
  width: 42px;
`;

export function Header() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      boxShadow="10px 0px 30px -10px rgba(0,0,0,0.3)"
      height="65px"
      bg="main.white"
      p="0 30px 0 15px"
      borderLeft="1px solid #eff0f2"
    >
      <Flex gap="15px">
        <StyledAvatar />
        <Box>
          <Text fontWeight={3} fontSize={3}>
            Dvir Yadai
          </Text>
          <Text fontWeight={0} fontSize={2} color="#889098">
            Last seen 3 hours ago
          </Text>
        </Box>
      </Flex>
      <Flex gap="20px">
        <StyledSvg as={PhoneIcon} />
        <StyledSvg as={VideoIcon} />
        <StyledSvg as={EllipsisIcon} />
      </Flex>
    </Flex>
  );
}
