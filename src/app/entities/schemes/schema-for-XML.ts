import {Error} from 'tslint/lib/error';

declare global {
  interface Window {
    DOMParser: any;
  }
}

export function SchemaForXML (data: string) {
  const defaultKey = 'Valute';
  const currencies = [];

  try {
    if (window.DOMParser) {
      const rawData = new DOMParser();
      const xmlResult = rawData.parseFromString(data, 'application/xml');
      const listOfValute = xmlResult.getElementsByTagName(defaultKey);

      Array.from(listOfValute).forEach(currency => {
        const item = {};
        for (let i = 0; i < currency.childNodes.length; i++) {
          // @ts-ignore
          const key = currency.childNodes[i].tagName;
          if (key === 'Value') {
            item[key] = parseFloat(currency.childNodes[i].textContent.replace(',', '.'));
          } else {
            item[key] = currency.childNodes[i].textContent;
          }
        }
        currencies.push(item);
      });
      return currencies;
    } else {
      throw new Error(`Missing window.DOMParser or key with value ${defaultKey}`);
    }
  } catch (error) {
    console.log(error);
  }
}
