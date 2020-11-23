import {ICurrencyMap} from './currency-map';

export interface IDataFromJSON {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: { [s: string]: ICurrencyItemJSON };
}

export interface ICurrencyItemJSON extends ICurrencyMap {
  ID?: string;
  Previous?: number;
}
