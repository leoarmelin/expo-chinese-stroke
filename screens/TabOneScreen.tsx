import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Keyboard, BackHandler } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SearchBar } from '../components/SearchBar';
import { Container, BackgroundButton } from '../styles/Search';

export default function TabOneScreen() {
  const inputRef = useRef<TextInput>();
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      handleBlur();
      inputRef.current?.blur();
    });

    Keyboard.removeListener('keyboardDidHide', () => {
      handleBlur();
      inputRef.current?.blur();
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isFocused) {
          Keyboard.dismiss();
          return true;
        } else {
          return false;
        }
      }
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Container>
      <BackgroundButton
        activeOpacity={1}
        isFocused={isFocused || searchText.length > 0}
        onPress={() => Keyboard.dismiss()}
      >
        <SearchBar
          ref={inputRef}
          searchText={searchText}
          setSearchText={setSearchText}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </BackgroundButton>
    </Container>
  );
}
