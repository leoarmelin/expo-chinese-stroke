import React from 'react';
import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { Container, SearchButton, SearchIcon, SearchInput } from './styles';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onSubmit: () => void;
}

export const SearchBar = forwardRef<TextInput, SearchBarProps>(
  ({ searchText, setSearchText, onFocus, onBlur, onSubmit }, ref) => {
    return (
      <Container
        style={{
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        }}
      >
        <SearchInput
          ref={ref}
          placeholder='Search here!'
          placeholderTextColor='#B0B0B0'
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <SearchButton onPress={onSubmit}>
          <SearchIcon name='search-outline' size={32} />
        </SearchButton>
      </Container>
    );
  }
);
