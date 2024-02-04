import { ThemeProvider } from 'styled-components';
import { Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from './styles';
import { SignUp, Login, Main } from './components/pages';
import store from './store';
import { useAppSelector } from './hooks/redux-hooks';

function ProtectedLayout() {
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  if (!basicUserInfo) {
    return <Navigate replace to="/login" />;
  }

  return <Outlet />;
}

function DefaultLayout() {
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  if (basicUserInfo) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}

function Root() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
