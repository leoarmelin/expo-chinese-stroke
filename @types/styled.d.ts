import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    window: {
      width: string;
      height: string;
    };

    colors: {
      background: string;
      primary: string;
      title: string;
      body: string;
    };
  }
}
