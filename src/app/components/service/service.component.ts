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
  filtreliKayitlar: Kisi[];

  constructor(public servis: DataService) {

  }

  ngOnInit() {
    this.ad = this.servis.siteAdi;
    this.kayitlar = this.servis.KayitListele();
    this.filtreliKayitlar = this.servis.KayitListele();
  }

  KayitAra(d) {
    this.filtreliKayitlar = this.kayitlar.filter(s => s.AdSoyad.includes(d) || s.Mail.includes(d))
  }

  KayitSil(k: Kisi) {
    this.servis.KayitSil(k);
  }
}
