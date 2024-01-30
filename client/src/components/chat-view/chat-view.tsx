import { Box } from '../ui';
import { Footer } from './footer';
import { Header } from './header';

export function ChatView() {
  return (
    <Box flex="1">
      <Header />
      <Box height="calc(100% - 125px)">asd</Box>
      <Footer />
    </Box>
  );
}
