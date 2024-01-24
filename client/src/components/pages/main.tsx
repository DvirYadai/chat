import { Box } from '../ui';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function Main() {
  return (
    <Box height="100%" width="100%" fontFamily="Kanit">
      <Header />
      <Sidebar />
    </Box>
  );
}
