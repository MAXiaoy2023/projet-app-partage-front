import { Component, Input, OnInit } from '@angular/core';
import { AdLender } from '../entities';
import { AdLenderService } from '../ad-lender.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
 
})
export class HomeComponent implements OnInit {
  list:AdLender[]=[];

  constructor(private adLenderService:AdLenderService){}

  ngOnInit(): void {
    this.adLenderService.fetchAll().subscribe(data=>this.list=data);
  }

  addToList(adLender:AdLender) {
    this.adLenderService.add(adLender).subscribe(data=>this.list.push(data));
  }

  removeAdLender(adLender:AdLender) {
    if(adLender.id) {
      this.adLenderService.delete(adLender.id)
      .subscribe(()=>this.list=this.list.filter(item=>item.id !=adLender.id));
    }
  }

}
