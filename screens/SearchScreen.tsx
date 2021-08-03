import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useRef, useEffect } from 'react';
import { Keyboard, BackHandler } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { RootStackParamList } from '../@types/routes';
import { SearchBar } from '../components/SearchBar';
import { Container, BackgroundButton } from '../styles/Search';

import { IStroke } from '../interfaces/IStroke';
import { useFetch } from '../hooks/useFetch';
import { IStrokeSearch } from '../interfaces/IStrokeSearch';

export default function TabOneScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Search'>) {
  const inputRef = useRef<TextInput>();
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { data: ideogramList } = useFetch<IStroke[]>(
    searchText ? `/strokes/search?term=${searchText}` : null
  );

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (ideogramSelected: IStrokeSearch) => {
    navigation.navigate('Ideogram', { ideogram: ideogramSelected });
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      handleBlur();
      // @ts-ignore
      inputRef.current?.blur();
    });

    Keyboard.removeListener('keyboardDidHide', () => {
      handleBlur();
      // @ts-ignore
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
          // @ts-ignore
          ref={inputRef}
          searchText={searchText}
          setSearchText={setSearchText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          ideogramList={ideogramList}
        />
      </BackgroundButton>
    </Container>
  );
}
