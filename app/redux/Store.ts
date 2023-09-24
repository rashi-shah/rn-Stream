import {rootReducer} from './reducer';
import {persistReducer, persistStore} from 'redux-persist';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middlewares = getDefaultMiddleware({serializableCheck: false});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'notification'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
