import { IStrokeSearch } from '../interfaces/IStrokeSearch';

export type RootStackParamList = {
  Search: undefined;
  Ideogram: {
    ideogram: IStrokeSearch;
  };
  NotFound: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
