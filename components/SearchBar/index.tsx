import React from 'react';
import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { IStroke } from '../../interfaces/IStroke';
import { IStrokeSearch } from '../../interfaces/IStrokeSearch';
import { Origin } from '../../interfaces/Origin';
import {
  Container,
  Row,
  ListContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
  SearchList,
  ListIdeogram,
  ListPinyin,
  ListMeaning,
} from './styles';

interface SearchBarProps {
  ideogramList: IStrokeSearch[] | undefined;
  searchText: string;
  setSearchText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onSubmit: (ideogramSelected: IStrokeSearch) => void;
}

export const SearchBar = forwardRef<TextInput, SearchBarProps>(
  (
    { ideogramList, searchText, setSearchText, onFocus, onBlur, onSubmit },
    ref
  ) => {
    const IdeogramList = ({ item }: { item: IStrokeSearch }) => (
      <ListContainer activeOpacity={0.5} onPress={() => onSubmit(item)}>
        <ListIdeogram>
          {item.symbol}
          {'   '}
        </ListIdeogram>
        <ListPinyin>{`${item.pinyin} - `}</ListPinyin>
        <ListMeaning numberOfLines={1} ellipsizeMode='tail'>
          {item.meanings.pt
            ? item.meanings.pt.join(', ')
            : item.meanings.en?.join(', ')}
        </ListMeaning>
      </ListContainer>
    );

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
        <Row>
          <SearchInput
            // @ts-ignore
            ref={ref}
            placeholder='Search here!'
            placeholderTextColor='#B0B0B0'
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          <SearchButton>
            <SearchIcon name='search-outline' size={32} />
          </SearchButton>
        </Row>

        {ideogramList && (
          <SearchList
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <IdeogramList item={item} />}
            data={ideogramList}
          />
        )}
      </Container>
    );
  }
);
