import { ThemeProvider } from 'styled-components';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { theme } from './styles';
import { Main } from './components/pages';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
