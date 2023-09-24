import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/Store';
import {CustomerType, UserStateType, UserType} from '../../../types/AppTypes';
import {Dispatch, useState} from 'react';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {setPageNo} from '../../../redux/user';

export interface SearchHookReturnType {
  text: string;
  handleTextChange: (val: string) => void;
  user: Omit<UserStateType, 'localUserList'>;
  searchList: UserType[] | undefined;
  dispatch: ThunkDispatch<any, undefined, AnyAction> & Dispatch<AppDispatch>;
  currentUser: CustomerType;
  changePageNo: () => void;
}

const useSearch = (): SearchHookReturnType => {
  const [text, setText] = useState<string>('');
  const [searchList, setSearchList] = useState<UserType[]>();
  const user: Omit<UserStateType, 'localUserList'> = useSelector(
    (state: RootState) => state.user,
  );
  const currentUser: CustomerType = useSelector(
    (state: RootState) => state.auth.currentUser as CustomerType,
  );
  const dispatch = useDispatch<AppDispatch>();

  const searchRegex = (text: string) => {
    const regex = new RegExp(text.trim(), 'i');
    return regex;
  };

  const handleTextChange = (val: string) => {
    setText(val);
    searchText(val);
  };

  const changePageNo = () => {
    if (user.pageNo < 2) {
      dispatch(setPageNo(user.pageNo + 1));
    }
  };

  const searchText = (text: string) => {
    if (text) {
      const regex = searchRegex(text);
      const searchResult = [
        ...user.userList,
        ...currentUser?.localUserList,
      ].filter(user => {
        if (
          user?.first_name?.search(regex) !== -1 ||
          user?.last_name?.search(regex) !== -1 ||
          user?.email?.search(regex) !== -1
        ) {
          return true;
        }
        return false;
      });
      setSearchList(searchResult);
    } else {
      setSearchList([]);
    }
  };

  return {
    text,
    handleTextChange,
    searchList,
    dispatch,
    user,
    currentUser,
    changePageNo,
  };
};

export default useSearch;
