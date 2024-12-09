import React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Logo from './src/asset/Indiv.png';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  largeText: {
    fontSize: 32, // 큰 글씨
  },
  mediumText: {
    fontSize: 20, // 중간 크기
  },
  smallText: {
    fontSize: 12, // 작은 글씨
  },
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'yellow',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={Logo}
          style={{width: width * 0.5, height: width * 0.5, marginBottom: 20}}
        />
        <Text
          style={{
            ...styles.largeText,
            fontWeight: '600',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}>
          React Native 정복기
        </Text>

        <TextInput
          placeholder="입력해주세용"
          style={{
            textAlign: 'left',
            backgroundColor: 'white',
            width: width * 0.5,
          }}
        />

        <Text
          onPress={() => {
            Alert.alert('custom btn');
          }}
          style={{
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            margin: 6,
            backgroundColor: 'blue',
            color: 'white',
            fontWeight: '600',
          }}>
          hi
        </Text>
        <Button
          title="test"
          onPress={() => {
            Alert.alert('button test');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
export default App;
