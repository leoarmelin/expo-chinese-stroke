import { Dimensions } from 'react-native';
import { DefaultTheme } from 'styled-components';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Theme: DefaultTheme = {
  borderRadius: '12px',

  window: {
    height: `${height}px`,
    width: `${width}px`,
  },

  colors: {
    background: '#FFFFFF',
    primary: '#6933FF',
    title: '#333333',
    body: '#B0B0B0',
  },
};

export { Theme };
