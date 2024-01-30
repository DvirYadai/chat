import { Box } from '../ui';
import { Footer } from './footer';
import { Header } from './header';
import { MessagesBox } from './messages-box';

export function ChatView() {
  return (
    <Box flex="1">
      <Header />
      <MessagesBox />
      <Footer />
    </Box>
  );
}
