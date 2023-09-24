import {RefObject, useRef} from 'react';
import {ChangePasswordType, CustomerStateType} from '../../../types/AppTypes';
import {ChangePasswordSchema, checkIfUserExists} from '../../../utils';
import {FormikErrors, FormikTouched, useFormik} from 'formik';
import {CustomInputRef} from '../../custom-input/CustomInputType';
import {Alert} from 'react-native';
import {errorMessages, strings} from '../../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import {editUser} from '../../../redux/auth';

export interface ChangePasswordHookReturnType {
  closeModal: () => void;
  handleSubmit: (e?: React.FormEvent<ChangePasswordType> | undefined) => void;
  values: ChangePasswordType;
  handleChange: {
    (e: React.ChangeEvent<ChangePasswordType>): void;
    <T = string | React.ChangeEvent<ChangePasswordType>>(
      field: T,
    ): T extends React.ChangeEvent<ChangePasswordType>
      ? void
      : (e: string | React.ChangeEvent<ChangePasswordType>) => void;
  };
  setFieldTouched: (
    field: string,
    touched?: boolean,
    shouldValidate?: boolean,
  ) => Promise<void> | Promise<FormikErrors<ChangePasswordType>>;
  touched: FormikTouched<ChangePasswordType>;
  errors: FormikErrors<ChangePasswordType>;
  inputRef: {
    newPasswordRef: RefObject<CustomInputRef>;
    confirmPasswordRef: RefObject<CustomInputRef>;
  };
}

const useChangePassword = (
  setModalVisible: (val: boolean) => void,
): ChangePasswordHookReturnType => {
  const newPasswordRef = useRef<CustomInputRef>(null);
  const confirmPasswordRef = useRef<CustomInputRef>(null);
  const dispatch = useDispatch();
  const user: CustomerStateType = useSelector((state: RootState) => state.auth);
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
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: () => handleChangePassword(),
  });

  const handleChangePassword = () => {
    const userIndex = checkIfUserExists(
      user.customerList,
      user.currentUser?.email as string,
    );
    if (values.oldPassword !== user.currentUser?.password) {
      Alert.alert(errorMessages.incorrectOldPassowrd);
      return;
    }
    if (values.oldPassword === values.newPassword) {
      Alert.alert(errorMessages.samePassword);
      return;
    }
    const newCurrentUser = {
      ...user.currentUser,
      password: values.newPassword,
    };
    const customerList = JSON.parse(JSON.stringify(user.customerList));
    customerList[userIndex] = newCurrentUser;
    dispatch(
      editUser({currentUser: newCurrentUser, customerList: customerList}),
    );
    Alert.alert(strings.passwordUpdated);
    setModalVisible(false);
    resetForm();
  };

  const closeModal = () => {
    setModalVisible(false);
    resetForm();
  };

  return {
    closeModal,
    handleSubmit,
    values,
    handleChange,
    setFieldTouched,
    touched,
    errors,
    inputRef: {newPasswordRef, confirmPasswordRef},
  };
};

export default useChangePassword;
