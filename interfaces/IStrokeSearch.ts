export interface IStrokeSearch {
  symbol: string,
  pinyin: string,
  origin: {
    pt?: string,
    en?: string
  },
  meanings: {
    pt?: string[],
    en?: string[]
  },
  file: string
}