import {combineReducers} from 'redux';
import {authReducer} from '../auth';
import {userReducer} from '../user/UserSlice';
import {notificationReducer} from '../notification';
import {themeReducer} from '../theme/ThemeSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notification: notificationReducer,
  theme: themeReducer,
});
