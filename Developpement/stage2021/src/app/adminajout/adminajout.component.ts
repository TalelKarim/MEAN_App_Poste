import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

declare const testadd:any
@Component({
  selector: 'app-adminajout',
  templateUrl: './adminajout.component.html',
  styleUrls: ['./adminajout.component.css']
})
export class AdminajoutComponent implements OnInit {

  constructor(private service : HttpServiceService) { }

  ngOnInit(): void {
  }
  async add(){
    const url = "http://localhost:5000/client"
    var cli = (<HTMLInputElement>document.getElementById("client")).value
    var adr = (<HTMLInputElement>document.getElementById("adresse")).value
    var tel = (<HTMLInputElement>document.getElementById("tel")).value
    var fax = (<HTMLInputElement>document.getElementById("fax")).value
    var mail = (<HTMLInputElement>document.getElementById("mail")).value
    var body = {"libelle": cli , "adresse": adr , "telephone": tel , "fax": fax, "mail":mail} 
    this.service.postData(url, body).subscribe((response) => {
      console.log('Response from api',response)
     }, (error) => {
     console.log("error is ", error)
     })  
  }

}
