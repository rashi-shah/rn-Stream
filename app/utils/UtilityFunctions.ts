import {RefObject} from 'react';
import {CustomInputRef} from '../components/custom-input/CustomInputType';
import {CustomerType} from '../types';
import {Permission, RESULTS, check, request} from 'react-native-permissions';
import {Alert} from 'react-native';
import {strings} from '../constants';

/**
 * This function checks if any user exists in customerDetails with this email and returns the index of that user.
 * @param {Partial<CustomerType>[]} customerDetails
 * @param {string} email
 * @returns {number}
 */
export const checkIfUserExists = (
  customerDetails: Partial<CustomerType>[],
  email: string,
): number => {
  const userIndex = customerDetails.findIndex(user => user.email === email);
  return userIndex;
};

/**
 * This function focus on the next TextInput
 * @param {RefObject<CustomInputRef>} ref
 * @returns {void}
 */
export const handleNextFocus = (ref: RefObject<CustomInputRef>) =>
  ref.current?.focus();

/**
 *This function checks if the permission is granted and if not then asks for the permission
 * @param {Permission} permission
 * @returns {void}
 */
export const checkPermission = (permission: Permission) => {
  check(permission).then(result => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        Alert.alert(strings.permissionUnavailable);
        break;
      case RESULTS.DENIED:
        request(permission);
        break;
      case RESULTS.BLOCKED:
        Alert.alert(strings.permissionBlocked);
        break;
      case RESULTS.LIMITED:
        Alert.alert(strings.permissionLimited);
        break;
      default:
        break;
    }
  });
};
