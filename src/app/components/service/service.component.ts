import { Component, OnInit } from '@angular/core';
import { Kisi } from 'src/app/models/kisi';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  ad: string;
  kayitlar: Kisi[];

  constructor(public servis: DataService) {

  }

  ngOnInit() {
    this.ad = this.servis.siteAdi;
    this.kayitlar = this.servis.KayitListele();
  }

  KayitSil(k: Kisi){
    this.servis.KayitSil(k);
  }
}
