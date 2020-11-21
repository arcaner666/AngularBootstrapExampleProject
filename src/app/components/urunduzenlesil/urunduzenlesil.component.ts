import { Urun } from './../../models/urun';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sonuc } from 'src/app/models/sonuc';
import { EtradeService } from 'src/app/services/etrade.service';
import { Kategori } from 'src/app/models/kategori';

@Component({
  selector: 'app-urunduzenlesil',
  templateUrl: './urunduzenlesil.component.html',
  styleUrls: ['./urunduzenlesil.component.css']
})
export class UrunduzenlesilComponent implements OnInit {

  //kategoriler: Kategori[];
  urunSonuc: Sonuc = new Sonuc();
  secUrun: Urun = new Urun();
  islem: number;
  urunId: number;


  constructor(
    public servis: EtradeService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.kategoriler = this.servis.KategoriListele();
    this.urunId = this.route.snapshot.params["id"];
    this.islem = this.route.snapshot.params["islem"];
    this.secUrun = this.servis.UrunById(this.urunId);
  }

  Kaydet() {
    this.urunSonuc = this.servis.UrunDuzenle(this.secUrun);
  }

  Sil() {
    this.urunSonuc = this.servis.UrunSil(this.secUrun);
  }
}
