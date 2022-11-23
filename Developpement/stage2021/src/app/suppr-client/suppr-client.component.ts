import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { promise } from 'protractor';
import { HttpServiceService } from '../http-service.service';

declare const test:any;
declare const f:any;
@Component({
  selector: 'app-suppr-client',
  templateUrl: './suppr-client.component.html',
  styleUrls: ['./suppr-client.component.css']
})
export class SupprClientComponent implements OnInit {
  constructor(private service : HttpServiceService) { }
  client:any

  async ngOnInit(): Promise<void> {
    const urlClient = "http://localhost:5000/client"

    this.service.getData(urlClient).subscribe((response) => {
      this.client = response['data'];
      console.log(this.client)
    }, (error) => console.log('error is ', error))
}
onClick(){
  test();
}
f2(){
  f();
}
f3(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

async Suppr(){
  const urlClient = "http://localhost:5000/client"
  var cl = (<HTMLSelectElement>document.getElementById("cli")).value
  console.log(cl)
  this.service.deleteData(urlClient, cl).subscribe((response) => {
    console.log('Response from api',response)
   }, (error) => {
   console.log("error is ", error)
   this.f3()
   })  
}
}