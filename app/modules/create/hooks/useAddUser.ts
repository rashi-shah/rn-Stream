import {ParamListBase, useNavigation} from '@react-navigation/native';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import React, {
  Dispatch,
  FormEvent,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {CustomInputRef} from '../../../components/custom-input/CustomInputType';
import {ROUTES, strings} from '../../../constants';
import {
  CustomerStateType,
  CustomerType,
  UserStateType,
  UserType,
} from '../../../types/AppTypes';
import {AddUserSchema, checkIfUserExists} from '../../../utils';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ImagePickerResponse} from 'react-native-image-picker';
import {addUser} from '../../../redux/auth';
import {useAddPicture} from '../../../hooks';

export interface CreateCustomHookReturnType {
  navigateToHome: () => void;
  values: {
    firstName: string;
    lastName: string;
    email: string;
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
  }>;
  errors: FormikErrors<{
    firstName: string;
    lastName: string;
    email: string;
  }>;
  handleSubmit: (e?: FormEvent<Partial<UserType>> | undefined) => void;
  lastNameRef: RefObject<CustomInputRef>;
  emailRef: RefObject<CustomInputRef>;
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
}

const useAddUser = (): CreateCustomHookReturnType => {
  const lastNameRef = useRef<CustomInputRef>(null);
  const emailRef = useRef<CustomInputRef>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<BottomTabNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const userDetails: Omit<UserStateType, 'localUserList'> = useSelector(
    (state: RootState) => state.user,
  );
  const customerDetails: CustomerStateType = useSelector(
    (state: RootState) => state.auth,
  );
  const currentUser: CustomerType = customerDetails.currentUser as CustomerType;
  const {
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: AddUserSchema,
    onSubmit: () => handleCreateUser(),
  });
  const {chooseImage, openCamera, response, setResponse} = useAddPicture();

  useEffect(() => {
    setModalVisible(false);
  }, [response]);

  const navigateToHome = () => {
    navigation.navigate(ROUTES.HomeScreen);
  };

  const handleCreateUser = () => {
    const userIndex = checkIfUserExists(
      [...currentUser.localUserList, ...userDetails.userList],
      values.email as string,
    );

    if (userIndex !== -1) {
      Alert.alert(strings.emailExists);
      return;
    }
    const newUser = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      id: Math.random().toString(),
      avatar: response?.assets?.[0]?.uri,
    };
    const newCurrentUser = {
      ...currentUser,
      localUserList: [...currentUser.localUserList, newUser],
    };
    const index = checkIfUserExists(
      customerDetails.customerList,
      currentUser?.email as string,
    );
    const updatedCustomerList = JSON.parse(
      JSON.stringify(customerDetails.customerList),
    );
    updatedCustomerList[index] = newCurrentUser;
    dispatch(
      addUser({
        currentUser: newCurrentUser,
        customerList: updatedCustomerList,
      }),
    );
    resetForm();
    setResponse({});
    navigateToHome();
  };

  return {
    navigateToHome,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    lastNameRef,
    emailRef,
    modalVisible,
    setModalVisible,
    chooseImage,
    openCamera,
    response,
  };
};

export default useAddUser;
