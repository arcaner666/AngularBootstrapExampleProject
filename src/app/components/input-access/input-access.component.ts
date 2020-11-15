import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-access',
  templateUrl: './input-access.component.html',
  styleUrls: ['./input-access.component.css']
})
export class InputAccessComponent implements OnInit {

  deger: string = "Değer";
  constructor() { }

  ngOnInit() {
  }

  Yaz1(gelen){
    console.log(gelen);
  }

  Yaz2(gelen){
    console.log(gelen);
  }

  Yaz3(gelen){
    this.deger = gelen;
  }
}
