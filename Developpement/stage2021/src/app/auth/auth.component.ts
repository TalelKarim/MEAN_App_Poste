import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { NotificationService } from '../notification.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  router:any; 
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];
  constructor(router:Router, private service : HttpServiceService, private notif: NotificationService ) { 
  this.router = router;

}
  ngOnInit(): void {  
  this.bodyTag.classList.add('login-page');
  this.htmlTag.classList.add('login-page');

  }
  async login(){
    const url = 'http://localhost:5000/agent/login';
    var email=(<HTMLInputElement>document.getElementById("mail")).value;
    var password=(<HTMLInputElement>document.getElementById("pwd")).value;
    console.log(email, password)
    const body = {
       "mail_ag": email,
       "password": password
    }
//      const response = await fetch("http:127.0.0.1:5000/agent/login", {
//        method: 'POST',
//        body:`{"mail_ag":"${email}","password":"${password}"}`});
//        if(response.ok){
//            response.json().then(async (data) =>{
//              console.log(data);
//              if (JSON.stringify(data) !="[]"){
//                if(JSON.stringify(data[0].matricule) != "1"){
//                  sessionStorage.id=JSON.stringify(data[0].matricule)
//                  console.log(data)
//                  this.router.navigate(['ajout-client']);
//                }
//                else{
//                  sessionStorage.id=JSON.stringify(data[0].matricule)
//                  console.log(data)
//                  this.router.navigate(['interface-admin']);
//                }
              
//              }
//              else{
//                alert("Mauvaise Coordonnées ! Veuillez verifier l'email ou le mot de passe")
//                var d = document.getElementById("wrong");
//                if(!d){document.getElementById("wrongholder")!.insertAdjacentHTML('beforeend', '<b style="color: red;" id = "wrong">Email/password invalid</b>');}
//              }
//            });
//  }

      this.service.postData(url, body).subscribe((response) => {
        console.log('Response from api',response)
            this.router.navigate(['interface-admin']);
      }, (error) => {
      console.log("error is ", error)
      this.notif.showError("Invalid Credentials", "error")

      })  
      }
}

