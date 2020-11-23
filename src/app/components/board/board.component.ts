import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Observable } from 'rxjs';
import { ICurrencyMap } from '../../entities/interfaces/currency-map';


@Component({
  selector: 'app-table',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnDestroy, OnInit {
  constructor( private currencyService: CurrencyService ) {}
  currentEUR: number;
  listOfCurrencies: Observable<ICurrencyMap[]>;
  columns:  string[];
  timeoutValue = 10000;
  timeout: ReturnType<typeof setTimeout>;
  emptyData = 'There is no data...';

  ngOnInit(): void {
    this.getCurrenciesList();
  }

  ngOnDestroy() {
    window.clearTimeout(this.timeout);
  }

  getCurrenciesList(): void {
    this.currencyService.getCurrencies()
      .subscribe(result => {
        this.unifyData(result);
        this.listOfCurrencies = result;
        this.columns = Object.keys(result[0]);
        this.timeout = window.setTimeout(() => { this.getCurrenciesList(); }, this.timeoutValue);
    }, error => {
        this.currencyService.getSourceValue();
        this.getCurrenciesList();
        console.log(error);
      });
  }

  unifyData(data): void {
    const idName = 'ID';
    const charCode = 'CharCode';
    for (const resultItem of data) {
      if (idName) {
        delete resultItem[idName];
      }
      if (resultItem[charCode].valueOf() === 'EUR') {
        this.currentEUR = resultItem.Value;
      }
    }
  }

  setStateSubRow(index: number): void {
    this.listOfCurrencies[index].isViewContainer = !this.listOfCurrencies[index].isViewContainer;
  }
}
