import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  mesaj1: string;
  mesaj2: string;
  menuGorunuyorMu: boolean = false;
  ackapa: boolean = false;
  sayi1 : number = 0;
  sayi2 : number = 0;
  gunler = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
  seciliGun: string = "";

  constructor() { }

  ngOnInit() {
  }

  StandartAlert(){
    alert("Butona Tıkladın!");
  }

  BootstrapAlert(){
    this.mesaj1 = "Butona Tıkladın!";
  }

  Tikla(){
    this.menuGorunuyorMu = true;
    this.mesaj2 = "Butona Tıkladın!";
  }

  Goster(){
    this.menuGorunuyorMu = true;
    this.mesaj2 = "Alert Göründü!";
  }

  Gizle(){
    this.menuGorunuyorMu = false;
  }

  GosterGizle(){
    this.menuGorunuyorMu = !this.menuGorunuyorMu;
  }

  Arttir1(){
    this.sayi1++;
  }

  Azalt1(){
    this.sayi1--;
  }

  Arttir2(){
    this.sayi2++;
  }

  Azalt2(){
    this.sayi2--;
  }

  GunSec(g){
    this.seciliGun=g;
  }
}
