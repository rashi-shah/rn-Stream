/* eslint-disable react-hooks/exhaustive-deps */
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {
  Dispatch,
  FormEvent,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import {CustomInputRef} from '../../custom-input/CustomInputType';
import {ROUTES, strings} from '../../../constants';
import {CustomerStateType, UserType} from '../../../types/AppTypes';
import {EditUserSchema, checkIfUserExists} from '../../../utils';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import useAddPicture from '../../../hooks/useAddPicture';
import {editUser} from '../../../redux/auth';
import {ImagePickerResponse} from 'react-native-image-picker';

export interface ProfileCustomHookReturnType {
  navigateToHome: () => void;
  values: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<Partial<UserType>>>(
      field: T,
    ): T extends React.ChangeEvent<Partial<UserType>>
      ? void
      : (e: string | React.ChangeEvent<Partial<UserType>>) => void;
  };
  touched: FormikTouched<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }>;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }>;
  handleSubmit: (e?: FormEvent<Partial<UserType>> | undefined) => void;
  inputRef: {
    lastNameRef: RefObject<CustomInputRef>;
    emailRef: RefObject<CustomInputRef>;
    phoneRef: RefObject<CustomInputRef>;
  };
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  chooseImage: () => Promise<void>;
  openCamera: () => Promise<void>;
  response: ImagePickerResponse;
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean,
  ) => Promise<void> | Promise<FormikErrors<Partial<UserType>>>;
  user: CustomerStateType;
}

const useEditUser = (
  setIfEditUser: (value: React.SetStateAction<boolean>) => void,
): ProfileCustomHookReturnType => {
  const lastNameRef = useRef<CustomInputRef>(null);
  const emailRef = useRef<CustomInputRef>(null);
  const phoneRef = useRef<CustomInputRef>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<BottomTabNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const user: CustomerStateType = useSelector((state: RootState) => state.auth);
  const {values, handleChange, setFieldTouched, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        firstName: user.currentUser?.firstName ?? '',
        lastName: user.currentUser?.lastName ?? '',
        email: user.currentUser?.email ?? '',
        phone: user.currentUser?.phone ?? '',
      },
      validationSchema: EditUserSchema,
      onSubmit: () => handleEditUser(),
    });
  const {chooseImage, openCamera, response} = useAddPicture();

  const navigateToHome = () => {
    navigation.navigate(ROUTES.HomeScreen);
  };

  const handleEditUser = () => {
    const index = checkIfUserExists(user.customerList, values.email as string);
    const userIndex = checkIfUserExists(
      user.customerList,
      user.currentUser?.email as string,
    );

    if (index !== -1 && values.email !== user.currentUser?.email) {
      Alert.alert(strings.emailExists);
      return;
    }
    const newCurrentUser = {
      ...user.currentUser,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      profile: response?.assets?.[0]?.uri,
    };
    const customerList = JSON.parse(JSON.stringify(user.customerList));
    customerList[userIndex] = newCurrentUser;
    dispatch(
      editUser({currentUser: newCurrentUser, customerList: customerList}),
    );
    setIfEditUser(false);
  };

  return {
    navigateToHome,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    inputRef: {lastNameRef, emailRef, phoneRef},
    modalVisible,
    setModalVisible,
    chooseImage,
    openCamera,
    values,
    response,
    user,
  };
};

export default useEditUser;
