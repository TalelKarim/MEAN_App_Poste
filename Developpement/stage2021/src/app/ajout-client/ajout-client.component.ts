import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NotificationService } from '../notification.service';

declare const testadd:any
@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent implements OnInit {

  constructor(private service : HttpServiceService,  private notif: NotificationService) { }

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
      this.ngOnInit();
      alert("hi")
      console.log('Response from api',response)
      this.notif.showSuccess("Client Ajouté", "Succé")
     }, (error) => {
     console.log("error is ", error)
     })  
  }

   

}

