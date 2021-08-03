import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Body, Headline, TitleThreeRegular } from './typography';

const { statusBarHeight } = Constants;

export const Container = styled.View`
  display: flex;
  flex: 1;
  position: relative;

  align-items: center;
  justify-content: flex-start;

  padding: ${`${statusBarHeight + 16}px`} 0;

  background-color: ${(props) => props.theme.colors.background};
`;

export const BackArrowButton = styled.TouchableOpacity`
  position: absolute;
  top: 8%;
  left: 5%;

  padding: 5px;
`;

export const BackArrow = styled(Ionicons)`
  color: ${(props) => props.theme.colors.body};
`;

export const AnimationContainer = styled.View`
  position: relative;

  height: 180px;
  width: 180px;

  margin-top: 10%;
`;

export const ReferenceImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Pinyin = styled(TitleThreeRegular)`
  margin: 8px 0;
`;

export const Translation = styled(Body)`
  margin-bottom: 32px;
`;

export const CardTitle = styled(Headline)`
  margin-bottom: 8px;
`;

export const CardText = styled(Body)``;
