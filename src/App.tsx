/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Suspense, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Title from './components/Title';
import Gretting from './components/Gretting';
import LanguageSelector from './components/LanguageSelector';

function App(): JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  // useEffect(() => {
  //   fetch('http://localhost:8080/locales/pt')
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // }, []);

  console.log('🚀 ~ file: App.tsx:18 ~ App ');

  return (
    <Suspense fallback={<Text>LOADING...</Text>}>
      <SafeAreaView style={styles.centeredView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={styles.centeredView}>
            <Title />
            <Gretting />
            <LanguageSelector />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 92,
  },
});

export default App;
