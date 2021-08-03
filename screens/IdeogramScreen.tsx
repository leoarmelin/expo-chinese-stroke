import React, { useState } from 'react';
import LottieView from 'lottie-react-native';
import {
  Container,
  BackArrow,
  ReferenceImage,
  AnimationContainer,
  Pinyin,
  Translation,
  BackArrowButton,
  CardTitle,
  CardText,
} from '../styles/Ideogram';

import referenceImg from '../assets/images/reference.png';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/routes';
import { Card } from '../components/Card';

export default function TabTwoScreen({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, 'Ideogram'>) {
  const { ideogram } = route.params;

  if (!ideogram?.file) return <></>;

  return (
    <Container>
      <BackArrowButton
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Search')}
      >
        <BackArrow name='chevron-back-outline' size={32} />
      </BackArrowButton>

      <AnimationContainer>
        <ReferenceImage source={referenceImg} />
        <LottieView source={JSON.parse(ideogram.file)} autoPlay loop />
      </AnimationContainer>

      <Pinyin>{ideogram.pinyin}</Pinyin>
      <Translation>
        {ideogram.meanings.pt
          ? ideogram.meanings.pt.join(', ')
          : ideogram.meanings.en?.join(', ')}
      </Translation>

      <Card>
        <CardTitle>Origem</CardTitle>
        <CardText>
          {ideogram.origin.pt ? ideogram.origin.pt : ideogram.origin.en}
        </CardText>
      </Card>
    </Container>
  );
}
