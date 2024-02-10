import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserBasicInfo } from './authSlice';
import axiosInstance from '../axiosInstance';

type Message = {
  id: number;
  content: string;
  timestamp: string;
  senderID: number;
};

type Chat = {
  id: number;
  messages: Array<Message>;
  user1Info: UserBasicInfo;
  user2Info: UserBasicInfo;
  lastMessage: Message | undefined;
};

type UserState = {
  activeSidebarMenuItem: 'chats' | 'groups' | 'calls' | 'settings';
  selectedChat: number | null;
  chats: Array<Chat>;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
};

const initialState: UserState = {
  activeSidebarMenuItem: 'chats',
  selectedChat: null,
  chats: [],
  status: 'idle',
  error: null,
};

export const getAllData = createAsyncThunk('getAllData', async () => {
  try {
    const response = await axiosInstance.get('/data/all');
    const resData = response.data;
    return resData;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchSidebarView: (state, action) => {
      state.activeSidebarMenuItem = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getAllData.fulfilled, (state, action: PayloadAction<Array<Chat>>) => {
        state.status = 'idle';
        state.chats = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Fetch data failed';
      });
  },
});

export const { switchSidebarView } = userSlice.actions;
export default userSlice.reducer;
