import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { TitleThreeRegular } from '../../styles/typography';
import { IStrokeSearch } from '../../interfaces/IStrokeSearch';

export const Container = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: 54px;
  height: auto;
  width: 84%;

  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) => props.theme.colors.background};
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;

  height: 54px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  height: 100%;
  flex: 1;

  font-family: 'ubuntu-regular';
  font-size: 20px;

  padding: 0 15px;

  color: ${(props) => props.theme.colors.title};
`;

export const SearchButton = styled.TouchableOpacity`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: auto;

  padding: 5px 15px 5px 10px;
`;

export const SearchIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.body};
`;

export const SearchList = styled(FlatList as new () => FlatList<IStrokeSearch>)`
  height: auto;
  width: 100%;
`;

export const ListContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  height: 50px;
  width: 100%;

  padding: 0 16px;
`;

export const ListIdeogram = styled(TitleThreeRegular)`
  color: ${(props) => props.theme.colors.title};
`;

export const ListPinyin = styled(TitleThreeRegular)`
  color: ${(props) => props.theme.colors.body};
`;

export const ListMeaning = styled(TitleThreeRegular)`
  max-width: 55%;
  color: ${(props) => props.theme.colors.body};
`;
