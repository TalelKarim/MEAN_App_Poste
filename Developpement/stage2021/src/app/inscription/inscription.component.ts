import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private service : HttpServiceService , private notif: NotificationService,  router:Router) {
     this.router = router
  }

  ngOnInit(): void {
  }
  router:any;
  async Add(){
  
    const url = 'http://localhost:5000/agent'
    var n = (<HTMLInputElement>document.getElementById("nom")).value
    var p = (<HTMLInputElement>document.getElementById("prenom")).value
    var m = (<HTMLInputElement>document.getElementById("mail")).value
    var t = (<HTMLInputElement>document.getElementById("tel")).value
    var pw = (<HTMLInputElement>document.getElementById("pwd")).value
    var body = {"nom": n,
               "prenom":p  ,
               "mail_ag":m ,
               "tel_ag":t, 
               "password":pw}
 
    this.service.postData(url, body).subscribe((response) => {
          console.log('Response from api',response)
          this.router.navigate['/'];
    }, (error) => {
      console.log("error is ", error);
      this.notif.showError("Invalid Credentials", "error")
    })  
  }
}
