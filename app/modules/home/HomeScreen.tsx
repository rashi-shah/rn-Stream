import React, {FC, useEffect} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {UserItem} from '../../components/user-item';
import {styles} from './HomeScreenStyles';
import {fetchUser} from '../../redux/user';
import {horizontalScale, moderateScale, verticalScale} from '../../theme';
import useSearch, {SearchHookReturnType} from './hooks/useSearch';
import ListEmptyComponent from '../../components/list-empty-component/ListEmptyComponent';
import {strings} from '../../constants';
import useColors from '../../hooks/useColors';

const HomeScreen: FC = () => {
  const {Colors} = useColors();
  const backgroundStyles = {backgroundColor: Colors.lightForeground};
  const {
    handleTextChange,
    text,
    user,
    searchList,
    dispatch,
    currentUser,
    changePageNo,
  }: SearchHookReturnType = useSearch();

  useEffect(() => {
    dispatch(fetchUser(user.pageNo));
  }, [user.pageNo]);

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        styles.screen,
        backgroundStyles,
      ])}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.blue}
        defaultValue={text}
        style={{
          color: Colors.lightButton,
          fontSize: moderateScale(24),
          borderColor: Colors.lightButton,
          borderWidth: StyleSheet.hairlineWidth,
          marginHorizontal: horizontalScale(10),
          marginVertical: verticalScale(10),
        }}
        onChangeText={val => handleTextChange(val)}
      />
      <View style={styles.container}>
        {text.length > 0 ? (
          <FlatList
            ListEmptyComponent={<ListEmptyComponent text={strings.noSearch} />}
            data={searchList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <UserItem {...{item}} />;
            }}
          />
        ) : (
          <FlatList
            data={[...(currentUser?.localUserList ?? []), ...user.userList]}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            onEndReached={changePageNo}
            ListEmptyComponent={<ListEmptyComponent text={strings.noData} />}
            onEndReachedThreshold={0.2}
            renderItem={({item}) => {
              return <UserItem {...{item}} />;
            }}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
