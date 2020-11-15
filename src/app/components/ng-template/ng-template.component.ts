import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent implements OnInit {

  islem1: boolean = true;
  islem2: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  AlertGosterGizle(){
    this.islem1 = !this.islem1;
  }

  KayitGosterGizle(){
    this.islem2 = !this.islem2;
  }
}
