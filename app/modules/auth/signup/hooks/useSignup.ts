import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {useRef} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {APIConstants, ROUTES, strings} from '../../../../constants';
import {RootState} from '../../../../redux/Store';
import {signup} from '../../../../redux/auth';
import {CustomerStateType, CustomerType} from '../../../../types/AppTypes';
import {SignupSchema, checkIfUserExists} from '../../../../utils';
import {setPageNo} from '../../../../redux/user';

export interface SignupHookReturnType {
  navigateToLogin: () => void;
  values: Omit<CustomerType, 'userId' | 'profile' | 'localUserList'>;
  handleChange: {
    (e: React.ChangeEvent<string>): void;
    <T = string | React.ChangeEvent<string>>(
      field: T,
    ): T extends React.ChangeEvent<string>
      ? void
      : (e: string | React.ChangeEvent<string>) => void;
  };
  setFieldTouched: (
    field: string,
    touched?: boolean | undefined,
    shouldValidate?: boolean | undefined,
  ) => Promise<void> | Promise<FormikErrors<CustomerType>>;
  touched: FormikTouched<CustomerType>;
  errors: FormikErrors<CustomerType>;
  handleSubmit: (e?: React.FormEvent<CustomerType> | undefined) => void;
  inputRef: {
    emailRef: React.MutableRefObject<null>;
    lastNameRef: React.MutableRefObject<null>;
    passwordRef: React.MutableRefObject<null>;
    confirmPasswordRef: React.MutableRefObject<null>;
    mobileRef: React.MutableRefObject<null>;
  };
}

const useSignup = (): SignupHookReturnType => {
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const mobileRef = useRef(null);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const customerDetails: CustomerStateType = useSelector(
    (state: RootState) => state.auth,
  );

  const navigateToLogin = () => {
    navigation.replace(ROUTES.Login);
  };

  const {values, handleChange, setFieldTouched, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
      },
      validationSchema: SignupSchema,
      onSubmit: values => signupHandler(values),
    });

  const signupHandler = (values: Partial<CustomerType>) => {
    const userIndex = checkIfUserExists(
      customerDetails?.customerList,
      values.email as string,
    );

    if (userIndex === -1) {
      const currentUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        phone: values.phone,
        userId: Math.floor(Math.random() * 100),
        profile: APIConstants.profileImageURL,
        localUserList: [],
      };
      const updatedUserList = [...customerDetails.customerList, currentUser];
      dispatch(signup({user: currentUser, customerList: updatedUserList}));
      dispatch(setPageNo(1));
      navigation.navigate(ROUTES.DrawerNavigation);
      return;
    }
    Alert.alert(strings.loginMessage);
    return;
  };

  return {
    navigateToLogin,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    handleSubmit,
    inputRef: {
      emailRef,
      lastNameRef,
      passwordRef,
      confirmPasswordRef,
      mobileRef,
    },
  };
};
export default useSignup;
