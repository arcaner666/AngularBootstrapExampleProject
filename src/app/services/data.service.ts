import { Injectable } from '@angular/core';
import { Kisi } from '../models/kisi';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public siteAdi = "Teknik Bilimler";

  public kisiler: Kisi[] = [
    {
      "Id": 30,
      "AdSoyad": "Sıla Tokcan",
      "Mail": "ultricies@eget.vc",
      "Yas": 26
    },
    {
      "Id": 38,
      "AdSoyad": "Nazmi Şaksu",
      "Mail": "Sed@tristique.bo",
      "Yas": 37
    },
    {
      "Id": 76,
      "AdSoyad": "Mübelliğ Candan",
      "Mail": "eget@elementum.jobs",
      "Yas": 29
    },
    {
      "Id": 55,
      "AdSoyad": "Kadreddin Kanmaz",
      "Mail": "ac@Curabitur.om",
      "Yas": 38
    },
    {
      "Id": 52,
      "AdSoyad": "Leyfunnur Tepekıran",
      "Mail": "rutrum@arcu.mu",
      "Yas": 29
    },
    {
      "Id": 44,
      "AdSoyad": "İltemir Karabağ",
      "Mail": "a@Cras.si",
      "Yas": 20
    }];

  constructor() { }

  KayitListele() {
    return this.kisiler;
  }

  KayitById(id:number) {
    var filtre = this.kisiler.filter(s => s.Id == id);
    return filtre[0];
  }

  KayitSil(k: Kisi) {
    var index = this.kisiler.indexOf(k);
    this.kisiler.splice(index,1);
    return true;
  }
}
