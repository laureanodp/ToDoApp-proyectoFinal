import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import boardsReducer from './slice/boardsSlice'
import tasksReducer from './slice/tasksSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    boards: boardsReducer,
    tasks : tasksReducer,
  },
});

export default store;
