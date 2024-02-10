import { useEffect } from 'react';
import { Sidebar } from '../sidebar';
import { Box, Flex } from '../ui';
import { Header } from '../header';
import { ChatView } from '../chat-view';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { verify } from '../../slices/authSlice';
import { getAllData } from '../../slices/userSlice';

export function Main() {
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const verifyFunc = async () => {
      await dispatch(verify(basicUserInfo)).unwrap();
    };
    verifyFunc();
    dispatch(getAllData()).unwrap();
  });

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
