import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';
import {appStyles} from '../../theme';

const WebViewScreen = () => {
  const route = useRoute<RouteProp<{params: {url: string}}, 'params'>>();

  return (
    <WebView
      source={{
        uri: route.params.url,
      }}
      style={appStyles.container}
    />
  );
};

export default WebViewScreen;
