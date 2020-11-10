import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.css']
})
export class VariableComponent implements OnInit {

  ad: string;
  soyad: string;
  yas: number;

  constructor() { }

  ngOnInit() {
    this.ad = "Arcan Caner";
    this.soyad = "Şenol";
    this.yas = 24;
  }

}
