import { configureStore } from '@reduxjs/toolkit';
import swaggerSlice from 'src/store/slices/swaggerSlice/swaggerSlice';
import configurationSlice from 'src/store/slices/configurationSlice/configurationSlice';

export const store = configureStore({
  reducer: {
    swaggerSlice: swaggerSlice,
    configurationSlice: configurationSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
