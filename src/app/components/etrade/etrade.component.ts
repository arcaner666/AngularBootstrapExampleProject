import { Sonuc } from './../../models/sonuc';
import { Kategori } from './../../models/kategori';
import { Component, OnInit } from '@angular/core';
import { Urun } from 'src/app/models/urun';
import { EtradeService } from 'src/app/services/etrade.service';

@Component({
  selector: 'app-etrade',
  templateUrl: './etrade.component.html',
  styleUrls: ['./etrade.component.css']
})
export class EtradeComponent implements OnInit {

  kategoriler: Kategori[];
  urunler: Urun[];
  katSonuc: Sonuc = new Sonuc();
  urunSonuc: Sonuc = new Sonuc();

  constructor(
    public servis: EtradeService
  ) { }

  ngOnInit() {
    this.KategoriListeGetir();
    this.UrunListeGetir();
  }

  KategoriListeGetir() {
    this.kategoriler = this.servis.KategoriListele();
  }

  UrunListeGetir() {
    this.urunler = this.servis.UrunListele();
  }

  KategoriKaydet(k: string) {
    var yeni: Kategori = new Kategori();
    yeni.katId = Math.floor(Math.random() * 100);
    yeni.katAdi = k;
    this.katSonuc = this.servis.KategoriEkle(yeni);
  }

  UrunKaydet(ad: string, fiyat: number, katId: number) {
    var yeni: Urun = new Urun();
    var kat: Kategori = this.servis.KategoriById(katId);
    yeni.urunId = Math.floor(Math.random() * 100);
    yeni.urunAdi = ad;
    yeni.urunFiyat = fiyat;
    yeni.urunKatId = katId;
    yeni.urunKatAdi = kat.katAdi;
    this.urunSonuc = this.servis.UrunEkle(yeni);
  }
}
