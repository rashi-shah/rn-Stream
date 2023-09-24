import * as Yup from 'yup';
import {errorMessages} from '../constants';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.invalidEmail)
    .required(errorMessages.empty),
  password: Yup.string()
    .min(8)
    .required(errorMessages.empty)
    .matches(
      /^((?!.*[\s])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/,
      errorMessages.invalidPassword,
    ),
});

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, errorMessages.short)
    .max(50, errorMessages.long)
    .matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/i, errorMessages.invalidName)
    .required(errorMessages.empty),
  lastName: Yup.string()
    .min(4, errorMessages.short)
    .max(50, errorMessages.long)
    .matches(/^([a-zA-Z]+\s)*[a-zA-Z]+$/i, errorMessages.invalidName)
    .required(errorMessages.empty),
  email: Yup.string()
    .email(errorMessages.invalidEmail)
    .required(errorMessages.empty),
  password: Yup.string()
    .min(8)
    .required(errorMessages.empty)
    .matches(
      /^((?!.*[\s])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/,
      errorMessages.invalidPassword,
    ),
  confirmPassword: Yup.string()
    .min(8)
    .max(12)
    .oneOf([Yup.ref('password')], errorMessages.confirmPassword)
    .required(errorMessages.empty),
  phone: Yup.string()
    .min(10, errorMessages.invalidMobile)
    .max(10, errorMessages.invalidMobile)
    .matches(/^[0-9]+$/, errorMessages.incorrectMobileNo)
    .required(errorMessages.empty),
});

export const AddUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, errorMessages.short)
    .max(50, errorMessages.long)
    .matches(/^[a-z ,.'-]+$/i, errorMessages.invalidName)
    .required(errorMessages.empty),
  lastName: Yup.string()
    .min(4, errorMessages.short)
    .max(50, errorMessages.long)
    .matches(/^[a-z ,.'-]+$/i, errorMessages.invalidName)
    .required(errorMessages.empty),
  email: Yup.string()
    .email(errorMessages.invalidEmail)
    .required(errorMessages.empty),
});

export const EditUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, errorMessages.short)
    .max(50, errorMessages.long)
    .matches(/^[a-z ,.'-]+$/i, errorMessages.invalidName)
    .required(errorMessages.empty),
  lastName: Yup.string()
    .min(4, errorMessages.short)
    .max(50, errorMessages.long)
    .matches(/^[a-z ,.'-]+$/i, errorMessages.invalidName)
    .required(errorMessages.empty),
  email: Yup.string()
    .email(errorMessages.invalidEmail)
    .required(errorMessages.empty),
  phone: Yup.string()
    .min(10, errorMessages.invalidMobile)
    .max(10, errorMessages.invalidMobile)
    .matches(/^[0-9]+$/, errorMessages.incorrectMobileNo)
    .required(errorMessages.empty),
});

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8)
    .required(errorMessages.empty)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      errorMessages.invalidPassword,
    ),
  newPassword: Yup.string()
    .min(8)
    .required(errorMessages.empty)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      errorMessages.invalidPassword,
    ),
  confirmPassword: Yup.string()
    .min(8)
    .max(12)
    .oneOf([Yup.ref('newPassword')], errorMessages.confirmPassword)
    .required(errorMessages.empty),
});
