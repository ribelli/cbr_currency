import {Error} from 'tslint/lib/error';

export function SchemaForJSON(data: string ) {
  const defaultKey = 'Valute';

    try {
      const rawData = JSON.parse(data);
      if (rawData[defaultKey]) {
        const itemsOdData = rawData[defaultKey];
        return Object.keys(itemsOdData).map(key => itemsOdData[key]);
      } else {
        throw new Error(`Missing key with value ${defaultKey}`);
      }
    } catch (error) {
      console.log(error);
    }
}
