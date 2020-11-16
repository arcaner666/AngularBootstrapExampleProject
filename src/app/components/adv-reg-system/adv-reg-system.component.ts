import { Kisi } from 'src/app/models/kisi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adv-reg-system',
  templateUrl: './adv-reg-system.component.html',
  styleUrls: ['./adv-reg-system.component.css']
})
export class AdvRegSystemComponent implements OnInit {

  kayit: Kisi = new Kisi();

  constructor() { }

  ngOnInit() {
    this.kayit.Id = 1;
    this.kayit.AdSoyad = "Arcan Caner Şenol";
    //this.kayit.Mail = "arc@gmail.com";
    this.kayit.Yas = 24;
  }

}
