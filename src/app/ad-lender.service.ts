import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AdLender } from './entities';

@Injectable({
  providedIn: 'root'
})
export class AdLenderService {

  constructor(private http:HttpClient) { }

  fetchAll() {
    return this.http.get<AdLender[]> (environment.serverUrl+'/api/adLender')
  }

  fetchOne(id:number) {
    return this.http.get<AdLender>(environment.serverUrl+'/api/adLender/'+id)
  }

  add(adLender:AdLender){
    return this.http.post<AdLender>(environment.serverUrl+'/api/adLender', adLender)
  }

  update(adLender:AdLender){
    return this.http.patch<AdLender>(environment.serverUrl+'/api/adLender'+adLender.id, adLender)
  }

  delete(id:number) {
    return this.http.delete<AdLender>(environment.serverUrl+'/api/adLender/'+id)
  }
}
