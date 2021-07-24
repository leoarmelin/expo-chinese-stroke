import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;

  height: 54px;
  width: 84%;

  border-radius: ${(props) => props.theme.borderRadius};

  background-color: ${(props) => props.theme.colors.background};
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
