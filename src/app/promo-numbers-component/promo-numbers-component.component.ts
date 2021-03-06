import { Component, Input } from '@angular/core';
import { PromoNumber } from '../dashboard';

@Component({
  selector: 'app-promo-numbers-component',
  templateUrl: './promo-numbers-component.component.html',
  styleUrls: ['./promo-numbers-component.component.css']
})
export class PromoNumbersComponentComponent {
  public intermediate;
  public _primaryColor: string;

  @Input() promo: PromoNumber;
  @Input()
  set primaryColor(primaryColor: string) {
  this._primaryColor = primaryColor;
  }
  constructor() { }

}
