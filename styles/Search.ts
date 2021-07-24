import styled from 'styled-components/native';
import Constants from 'expo-constants';

interface IBackgroundButton {
  isFocused: boolean;
}

const { statusBarHeight } = Constants;

export const Container = styled.View`
  display: flex;
  flex: 1;

  background-color: ${(props) => props.theme.colors.background};
`;

export const BackgroundButton = styled.TouchableOpacity<IBackgroundButton>`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: ${(props) => (props.isFocused ? 'flex-start' : 'center')};

  padding: ${`${statusBarHeight + 16}px`} 0;
`;
