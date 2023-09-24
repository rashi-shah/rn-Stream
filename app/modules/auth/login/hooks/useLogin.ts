import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {RefObject, useRef} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomInputRef} from '../../../../components/custom-input/CustomInputType';
import {ROUTES, errorMessages, strings} from '../../../../constants';
import {RootState} from '../../../../redux/Store';
import {login} from '../../../../redux/auth';
import {CustomerStateType, CustomerType} from '../../../../types';
import {checkIfUserExists, loginFormSchema} from '../../../../utils';
import {setPageNo} from '../../../../redux/user';

export interface LoginHookReturnType {
  navigateToSignup: () => void;
  values: {
    email: string;
    password: string;
  };
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
  passwordRef: RefObject<CustomInputRef>;
  handleSubmit: (e?: React.FormEvent<CustomerType> | undefined) => void;
}

const useLogin = (): LoginHookReturnType => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const passwordRef = useRef<CustomInputRef>(null);
  const customerDetails: CustomerStateType = useSelector(
    (state: RootState) => state.auth,
  );

  const navigateToSignup = () => {
    navigation.replace(ROUTES.Signup);
  };

  const loginHandler = (values: Partial<CustomerType>) => {
    const userIndex = checkIfUserExists(
      customerDetails?.customerList,
      values.email as string,
    );
    if (userIndex === -1) {
      Alert.alert(strings.signupMessage);
      return;
    }
    let currentUser;
    const customerList = JSON.parse(
      JSON.stringify(customerDetails.customerList),
    );
    if (customerList[userIndex].password === values.password) {
      currentUser = customerList[userIndex];
    } else {
      Alert.alert(errorMessages.incorrectPassowrd);
      return;
    }
    dispatch(login(currentUser));
    dispatch(setPageNo(1));
    navigation.replace(ROUTES.DrawerNavigation);
  };

  const {values, handleChange, setFieldTouched, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginFormSchema,
      onSubmit: values => loginHandler(values),
    });

  return {
    navigateToSignup,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    passwordRef,
    handleSubmit,
  };
};

export default useLogin;
