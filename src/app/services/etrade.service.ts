import { Urun } from './../models/urun';
import { Sonuc } from './../models/sonuc';
import { Kategoriler, Urunler } from './data';
import { Kategori } from './../models/kategori';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtradeService {

  constructor() { }

  /* Kategori Servis Başla */
  KategoriListele() {
    return Kategoriler;
  }

  KategoriById(id: number) {
    var filtre = Kategoriler.filter(s => s.katId == id);
    return filtre[0];
  }

  KategoriEkle(kat: Kategori) {
    var sonuc: Sonuc = new Sonuc();
    var filtre = Kategoriler.filter(s => s.katAdi == kat.katAdi);
    if (filtre.length > 0) {
      sonuc.islem = false;
      sonuc.mesaj = "Girilen kategori kayıtlıdır!";
    }
    else {
      Kategoriler.push(kat);
      sonuc.islem = true;
      sonuc.mesaj = "Kategori eklendi.";
    }
    return sonuc;
  }

  KategoriDuzenle(kat: Kategori) {
    var index = Kategoriler.indexOf(kat);
    Kategoriler[index].katAdi = kat.katAdi;

    var sonuc: Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Kategori güncellendi.";
    return sonuc;
  }

  KategoriSil(kat: Kategori) {
    var urunler = Urunler.filter(s => s.urunKatId == kat.katId);
    var sonuc: Sonuc = new Sonuc();
    if (urunler.length > 0) {
      sonuc.islem = false;
      sonuc.mesaj = "Üzerinde ürün kayıtlı olan kategori silinemez!";
    }
    else {
      var index = Kategoriler.indexOf(kat);
      Kategoriler.splice(index, 1);
      sonuc.islem = true;
      sonuc.mesaj = "Kategori silindi.";
    }
    return sonuc;
  }
  /* Kategori Servis Bitir */

  /* Ürün Servis Başla */
  UrunListele() {
    return Urunler;
  }

  UrunById(id: number) {
    var filtre = Urunler.filter(s => s.urunId == id);
    return filtre[0];
  }

  UrunListeleByKatId(katId: number) {
    var filtre = Urunler.filter(s => s.urunKatId == katId);
    return filtre;
  }

  UrunEkle(urun: Urun) {
    var sonuc: Sonuc = new Sonuc();
    var filtre = Urunler.filter(s => s.urunAdi == urun.urunAdi);
    if (filtre.length > 0) {
      sonuc.islem = false;
      sonuc.mesaj = "Bu ürün zaten mevcut!";
    }
    else {
      Urunler.push(urun);
      sonuc.islem = true;
      sonuc.mesaj = "Ürün eklendi.";
    }
    return sonuc;
  }

  UrunDuzenle(urun: Urun) {
    var index = Urunler.indexOf(urun);
    Urunler[index].urunAdi = urun.urunAdi;
    Urunler[index].urunFiyat = urun.urunFiyat;
    Urunler[index].urunKatId = urun.urunKatId;
    Urunler[index].urunKatAdi = urun.urunKatAdi;

    var sonuc: Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Ürün güncellendi.";
    return sonuc;
  }

  UrunSil(urun: Urun) {
    var index = Urunler.indexOf(urun);
    Urunler.splice(index, 1);
    var sonuc: Sonuc = new Sonuc();
    sonuc.islem = true;
    sonuc.mesaj = "Ürün silindi.";
    return sonuc;
  }
  /* Ürün Servis Bitir */

}
