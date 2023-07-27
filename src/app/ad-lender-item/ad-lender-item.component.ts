import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdLender } from '../entities';

@Component({
  selector: 'app-ad-lender-item',
  templateUrl: './ad-lender-item.component.html',
  styleUrls: ['./ad-lender-item.component.css']
})
export class AdLenderItemComponent {

  @Input({ required: true })
  adLender: AdLender;

  @Output()
  delete = new EventEmitter<AdLender>();

  buttonOnClick() {
    this.delete.emit(this.adLender);
  }

}
