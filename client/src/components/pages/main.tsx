import { Sidebar } from '../sidebar';
import { Box, Flex } from '../ui';
import { Header } from '../header';
import { ChatView } from '../chat-view';

export function Main() {
  return (
    <Box height="100%" width="100%" fontFamily="Kanit">
      <Header />
      <Flex height="calc(100% - 60px)">
        <Sidebar />
        <ChatView />
      </Flex>
    </Box>
  );
}
