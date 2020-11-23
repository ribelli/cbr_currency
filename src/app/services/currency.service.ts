import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SchemaForJSON } from '../entities/schemes/schema-for-JSON';
import { SchemaForXML } from '../entities/schemes/schema-for-XML';


export interface ISources {
  url: string;
  type: string;
}

const BASE_URL = 'https://www.cbr-xml-daily.ru';
const LIST_OF_SOURCES: Array<ISources>  = [
  {
    url: `${BASE_URL}/daily_json.js`,
    type: 'application/javascript'
  },
  {
    url: `${BASE_URL}/daily_utf8.xml`,
    type: 'text/xml'
  }
];

@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [BrowserModule],
})
export class CurrencyService {
  constructor( private http: HttpClient ) {}
  listOfSources = LIST_OF_SOURCES;
  currentId = 1;

  getSourceValue(): void {
    if (this.listOfSources.length <= 2) {
      this.currentId = this.currentId < (this.listOfSources.length - 1) ? ++this.currentId : 0;
    } else {
      this.currentId = Math.floor(Math.random() * this.listOfSources.length);
    }
  }

  getCurrencies(): Observable<any> {
    const source = this.listOfSources[this.currentId];

    return this.http.get(source.url, {responseType: 'text'})
      .pipe(map ((data: string) => {
        if (source.type === 'application/javascript') {
          return SchemaForJSON(data);
        } else if (source.type === 'text/xml') {
          return SchemaForXML(data);
        }
      }));
  }
}
