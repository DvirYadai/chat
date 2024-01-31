import { ThemeProvider } from 'styled-components';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { theme } from './styles';
import { SignUp, Login, Main } from './components/pages';

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<SignUp />} />
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
