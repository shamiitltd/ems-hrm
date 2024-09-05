import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';

const store = configureStore({
  reducer: authReducer,
});

export default store;