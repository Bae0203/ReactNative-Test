# 꾹꾹 눌러담은 실전압축 React Native 적응기

_내가 느끼기에는 이랬다~, 내가 할땐 이랬다~ 하는 글인점 감안하고 봐주세요_

## 기본 설정 (node는 깔려있다고 가정)

1. watchman 설치
2. Android Studio 설치 - sdk manager에서 세팅 해야됨
3. React Native CLI 설치 - global로 설치
4. npx react-native init [이름] 으로 기본 앱 설치
5. .zshrc 파일 설정
6. 실행

### 실행 방법

`npx react-native run-android`

## 주요 컴포넌트 목록

React Native는 div, p이딴거 없음 자기들이 지정해준걸로 써야됨

```
1. <View></View>
- div 태그 대용

2. <Text></Text>
- p 태그 대용

3. <Image />
- img 태그 대용
- src가 아닌 source로 써야 작동(이미지 불러오는건 동일함(import로 불러서 안에 넣으면 됨))
- react-app-env.d.ts 파일, image.d.ts 파일 필요

4. <Button />
- button 태그 대용
- 엄청 특이한게 단 태그임
- onClick => onPress
- 스타일링 안먹힘(할거면 커스텀해서 써야됨)

5. <TextInput />
- input 태그 대용
- 좀 이상한게 width를 안 정해주면 지들 알아서 정해버림(글자에 따라 width가 달라짐)
- OnChange => OnChangeText
```

그외 팁<br/>

1. Alert쓸거면 Alert.[alert, prompt] 이렇게 쓸 수 있음

## 스타일링 관련

```
const styles = StyleSheet.create({
  largeText: {
    fontSize: 32,
  },
  mediumText: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 12,
  },
});
```

이런식으로 따로 지정해서 style에 넣거나 style에 바로 때려박아야됨(styled-components는 알아서)<br/>
주의 사항 : px, rem 이런 단위를 모름 그냥 숫자 때려 박아야됨<br/>

### 그래서 나온 화면 너비에 맞춘 스타일링

`const {width, height} = Dimensions.get('window');`<br/>
이걸로 화면 너비를 구해올 수 있음<br/>
`style={{width: width * 0.5, height: width * 0.5, marginBottom: 20}}`<br/>
이런 식으로 사용 가능<br/>

## 킹왕짱 styled-components

사용하기 전에 React, React-Dom 버전이 18인지 확인부터 해야됨(아니면 애러나서 안깔림)<br/>
참고로 설치하는 방법은 react와 동일함 `npm i styled-components`<br/>
사용하는 방법도 동일함, 근데 styled import할때 <br/>
`...'styled-components/native'`이렇게 뒤에 /native를 붙여줘야 작동함
