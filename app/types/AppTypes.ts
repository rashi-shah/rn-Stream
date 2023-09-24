import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export interface CustomerType {
  userId: number;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  email: string;
  confirmPassword?: string;
  profile: string;
  localUserList: UserType[];
}

export interface CustomerStateType {
  customerList: CustomerType[];
  currentUser: CustomerType | null;
}

export interface UserType {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserStateType {
  userList: UserType[];
  userLoading: boolean;
  pageNo: number;
  error: string;
}

export interface ChangePasswordType {
  newPassword: string;
  confirmPassword: string;
  oldPassword: string;
}

export interface NotificationStateType {
  notificationList: FirebaseMessagingTypes.RemoteMessage[];
}
