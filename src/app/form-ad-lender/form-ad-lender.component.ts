import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AdLender } from '../entities';

@Component({
  selector: 'app-form-ad-lender',
  templateUrl: './form-ad-lender.component.html',
  styleUrls: ['./form-ad-lender.component.css']
})
export class FormAdLenderComponent {
@Input()
adLender:AdLender ={
  adTitle: '', adDescription: '', adCategory: '', adKeywords: '', adPicture: '', adStatus: true, city: '', createdDate: new Date,
  user:''};

@Output()
added = new EventEmitter<AdLender>();

handleSubmit()
{
  this.added.emit(this.adLender);
}
}
