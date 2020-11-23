import {Component, Input} from '@angular/core';
import {ICurrencyMap} from '../../entities/interfaces/currency-map';

@Component({
  selector: 'app-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.scss']
})
export class BoardRowComponent {
  @Input() item: ICurrencyMap;
  @Input() columns;
}
