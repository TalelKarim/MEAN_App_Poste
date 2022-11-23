import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';


declare const testadde:any
@Component({
  selector: 'app-admindepot',
  templateUrl: './admindepot.component.html',
  styleUrls: ['./admindepot.component.css']
})
export class AdmindepotComponent implements OnInit {
  
  constructor(private service : HttpServiceService) { }
  client:any;
  region:any;
  bp:any;
  serv:any
  async ngOnInit(): Promise<void> {
    const urlRegion = "http://localhost:5000/region"
    const urlClient = "http://localhost:5000/client"
    const urlService = "http://localhost:5000/service"

  //   const rep1 = await fetch("http://127.0.0.1:8000/selectc");
  //   if (rep1.ok){
  //     rep1.json().then(data =>{
  //       this.client = data;
  //       console.log(this.client)
  //     })
  //   }

    this.service.getData(urlRegion).subscribe((response) => {
          this.region = response['data'];
          console.log(this.region)
    }, (error) => console.log('error is ', error))

    this.service.getData(urlService).subscribe((response) => {
      this.serv = response['data'];
      console.log(this.serv)
}, (error) => console.log('error is ', error))

   this.service.getData(urlClient).subscribe((response) => {
     this.client = response['data'];
     console.log(this.client)
   }, (error) => console.log('error is ', error))

  //   const rep2 = await fetch("http://127.0.0.1:8000/selectr");
  //   if (rep2.ok){
  //     rep2.json().then(data =>{
  //       this.region = data;
  //       console.log(this.region)

  //     })   
  // }
  //   const rep4 = await fetch("http://127.0.0.1:8000/selects");
  //   if (rep4.ok){
  //     rep4.json().then(data =>{
  //       this.serv = data;
  //       console.log(this.serv)

  //     })   
  // }
     }
     async f1() {
      var val=(<HTMLSelectElement>document.getElementById("reg")).value
      console.log(val)
      // const rep3 = await fetch(`http://127.0.0.1:8000/selectbp?id= ${val}`);
      // if (rep3.ok){
      //   rep3.json().then(data =>{
      //     this.bp = data;
      //     console.log(this.bp)
      //   })
      this.service.getData(`http://127.0.0.1:5000/bureau/${val}`).subscribe((response) => {
        this.bp = response['data'];
        console.log(this.bp)
      }, (error) => console.log('error is ', error))
      }
     

async Add(){
  
  const url = "http://localhost:5000/depot"
  var srv = (<HTMLInputElement>document.getElementById("service")).value
  var br = (<HTMLInputElement>document.getElementById("bp")).value
  var cl = (<HTMLInputElement>document.getElementById("cli")).value
  var m = (<HTMLInputElement>document.getElementById("mt")).value
  var n = (<HTMLInputElement>document.getElementById("nbre")).value
  var myDate = new Date();
  var body = {"client":cl , "service":srv , "bureau": br,  "montant":m, "nombre":n , "date_envoi": myDate} 
 
  this.service.postData(url, body).subscribe((response) => {
    console.log('Response from api',response)
   }, (error) => {
   console.log("error is ", error)
   })   
}

}
