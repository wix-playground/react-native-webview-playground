/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getAndroidResourceFolderName} from 'react-native/Libraries/Image/assetPathUtils';
const html = require('./bla/index.html');
const htmlUriObj = Image.resolveAssetSource(html);
const androidUri = `file:///android_res/${getAndroidResourceFolderName(
  'html',
)}/${htmlUriObj.uri}`;
console.log({androidUri});
class App extends React.Component {
  render() {
    return (
      <>
        <View style={{height: 200, width: 500}}>
          <Text>{html + '   ' + JSON.stringify(androidUri)}</Text>
        </View>
        <WebView
          originWhitelist={['*']}
          allowUniversalAccessFromFileURLs
          allowFileAccess
          originstyle={{backgroundColor: 'white'}}
          source={{uri: androidUri}}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
