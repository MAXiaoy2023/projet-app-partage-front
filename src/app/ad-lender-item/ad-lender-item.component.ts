import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdLender } from '../entities';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ad-lender-item',
  templateUrl: './ad-lender-item.component.html',
  styleUrls: ['./ad-lender-item.component.css']
})
export class AdLenderItemComponent {

  @Input({ required: true })
  adLender: AdLender;
  serverUrl = environment.serverUrl;

  @Output()
  delete = new EventEmitter<AdLender>();

  buttonOnClick() {
    this.delete.emit(this.adLender);
  }

}
