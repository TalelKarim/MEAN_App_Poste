import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-consultparam',
  templateUrl: './consultparam.component.html',
  styleUrls: ['./consultparam.component.css']
})
export class ConsultparamComponent implements OnInit {

  constructor(private service : HttpServiceService) { }
  client:any;
  region:any;
  bp:any;
  serv:any
  depot:any
  filename="rapport.xlsx"
  async ngOnInit(): Promise<void> {
    const urlRegion = "http://localhost:5000/region"
    const urlClient = "http://localhost:5000/client"
    const urlService = "http://localhost:5000/service"
      

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
  //   const rep1 = await fetch("http://127.0.0.1:8000/selectc");
  //   if (rep1.ok){
  //     rep1.json().then(data =>{
  //       this.client = data;
  //       console.log(this.client)
  //     })
  //   }

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
      this.service.getData(`http://127.0.0.1:5000/bureau/${val}`).subscribe((response) => {
        this.bp = response['data'];
        console.log(this.bp)
      }, (error) => console.log('error is ', error))
    }
    async Filtrer(){
      function f1() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      f1();
      var cli =(<HTMLSelectElement>document.getElementById("cli")).value;
      var bp =(<HTMLSelectElement>document.getElementById("bp")).value;
      var serv=(<HTMLSelectElement>document.getElementById("service")).value;
      var date_s=(<HTMLSelectElement>document.getElementById("date_s")).value;
      var date_e=(<HTMLSelectElement>document.getElementById("date_e")).value;
    // const rep = await fetch(`http://127.0.0.1:8000/selectdepot?Client=${cli}&bp=${bp}&service=${serv}&date_s=${date_s}&date_e=${date_e}`)
    // rep.json().then(data =>{
    // this.depot=data;
    // console.log(data)
    // })
     const urlFiltered = `http://127.0.0.1:5000/depot/filter?client=${cli}&bureau=${bp}&service=${serv}&date_s=${date_s}&date_e=${date_e}`
     this.service.getData(urlFiltered).subscribe((response) => {
      console.log('Response from api',response)
      this.depot = response['filteredDepot'];
     }, (error) => {
     console.log("error is ", error)
     }) 
}
OnExportClickPDF(){
  const options= {
    filename: 'Rapport.pdf',
    html2canvas:{},
    jsPDF: {orientation: 'portrait'}
  };
  const content: Element = document.getElementById('exp');

  html2pdf().from(content).set(options).save()
}
OnExportClickXLS():void{
let element = document.getElementById('t1');
const ws : XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

const wb : XLSX.WorkBook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(wb,ws,"sheet 1");

XLSX.writeFile(wb,this.filename);
}
}
