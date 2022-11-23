import { Component, OnInit } from '@angular/core';
declare const testadde:any
@Component({
  selector: 'app-envoi-depot',
  templateUrl: './envoi-depot.component.html',
  styleUrls: ['./envoi-depot.component.css']
})
export class EnvoiDepotComponent implements OnInit {

  constructor() { }
  client:any;
  region:any;
  bp:any;
  serv:any
  async ngOnInit(): Promise<void> {

    const rep1 = await fetch("http://127.0.0.1:8000/selectc");
    if (rep1.ok){
      rep1.json().then(data =>{
        this.client = data;
        console.log(this.client)
      })
    }
    const rep2 = await fetch("http://127.0.0.1:8000/selectr");
    if (rep2.ok){
      rep2.json().then(data =>{
        this.region = data;
        console.log(this.region)

      })   
  }
    const rep4 = await fetch("http://127.0.0.1:8000/selects");
    if (rep4.ok){
      rep4.json().then(data =>{
        this.serv = data;
        console.log(this.serv)

      })   
  }
    }
     async f1() {
      var val=(<HTMLSelectElement>document.getElementById("reg")).value
      const rep3 = await fetch(`http://127.0.0.1:8000/selectbp?id= ${val}`);
      if (rep3.ok){
        rep3.json().then(data =>{
          this.bp = data;
          console.log(this.bp)
        })
      }
    }
async Add(){
  var srv = (<HTMLInputElement>document.getElementById("service")).value
  var br = (<HTMLInputElement>document.getElementById("bp")).value
  var cl = (<HTMLInputElement>document.getElementById("cli")).value
  var m = (<HTMLInputElement>document.getElementById("mt")).value
  var n = (<HTMLInputElement>document.getElementById("nbre")).value
  var body = `{"client":"${cl}" , "bureau":"${br}" , "service":"${srv}" , "montant":"${m}", "nombre":"${n}"}` 
  const rep = await fetch("http://127.0.0.1:8000/addepot" , {
    method:"POST" , 
    body : body
  })
  if (rep.ok){
    rep.json().then((data)=>{
      console.log(data)
    })
  }

}
onClick(){
  if (testadde() == true){
    this.Add()
  }
}
}