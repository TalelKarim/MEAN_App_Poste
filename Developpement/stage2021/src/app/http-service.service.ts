import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http : HttpClient) { }

  getData(url){
    return this.http.get(url)
  };

  postData(url :string,body: object){
    return this.http.post(url, body)
  }

  deleteData(url, param){
    return this.http.delete(`${url}/${param}`)
  }
}
