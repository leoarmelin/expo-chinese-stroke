import { Meanings } from './Mesnings';
import { Origin } from './Origin';

export interface IStroke {
  symbol: string;
  pinyin: string;
  origin: Origin;
  meanings: Meanings;
  file: string;
}
