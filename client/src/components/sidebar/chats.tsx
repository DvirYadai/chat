import styled, { css } from 'styled-components';
import { Box, Flex, Text } from '../ui';
import { Avatar } from '../ui/avatar';
import { SearchBar } from '../ui/searchbar';

const CardContainer = styled(Flex)`
  ${({ theme }) => css`
    cursor: pointer;
    margin-bottom: 10px;
    background: ${theme.colors.main.white};
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.3);
  `}
`;

function ChatCard() {
  return (
    <CardContainer>
      <Avatar />
      <Box overflow="hidden" whiteSpace="nowrap" maxWidth="165px">
        <Text fontWeight={3} fontSize={2}>
          Dvir Yadai
        </Text>
        <Text fontWeight={0} fontSize={1} color="#889098" overflow="hidden" textOverflow="ellipsis">
          Hey whats up? im good thanks. what do you do tomorrow?
        </Text>
      </Box>
      <Box fontSize={0}>
        <Text color="#7241e9" mb="5px">
          3:43 PM
        </Text>
        <Flex
          width="15px"
          height="15px"
          float="right"
          color="main.white"
          background="linear-gradient(90deg, rgba(114,65,233,1) 0%, rgba(180,53,245,1) 65%)"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
        >
          3
        </Flex>
      </Box>
    </CardContainer>
  );
}

export function Chats() {
  return (
    <Box p="20px">
      <Text fontWeight={3} fontSize={7} mb="7px">
        Chats
      </Text>
      <SearchBar />
      <Box mt="20px">
        {[0, 0, 0, 0, 0].map((i) => (
          <ChatCard key={i} />
        ))}
      </Box>
    </Box>
  );
}
