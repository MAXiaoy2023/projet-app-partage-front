import { Component, OnInit } from '@angular/core';
import { AdLender } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { AdLenderService } from '../ad-lender.service';

@Component({
  selector: 'app-every-ad-lender',
  templateUrl: './every-ad-lender.component.html',
  styleUrls: ['./every-ad-lender.component.css']
})
export class EveryAdLenderComponent implements OnInit {
  adLender: AdLender ={
    adTitle: '', adDescription: '', adCategory: '', adKeywords: '', adPicture: '', adStatus: true, city: '', createdDate: new Date,
    user:''};
  
  constructor(private route:ActivatedRoute, private adLenderService:AdLenderService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.adLenderService.fetchOne(params['id']).subscribe(data=>this.adLender=data))
  };

  updateAdLender (adLender:AdLender) {
    this.adLenderService.update(adLender).subscribe(data =>{
      this.adLender=data;
    })
  };
}
