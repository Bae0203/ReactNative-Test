import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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
      <View style={{width: '100%', height: '100%', backgroundColor: 'yellow'}}>
        <Text
          style={{
            ...styles.largeText,
            backgroundColor: 'white',
            margin: 'auto',
            textAlign: 'center',
            fontWeight: '600',
          }}>
          React Native 정복기
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
