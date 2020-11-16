import { Component, OnInit } from '@angular/core';
import { Kisi } from 'src/app/models/kisi';

@Component({
  selector: 'app-registration-system',
  templateUrl: './registration-system.component.html',
  styleUrls: ['./registration-system.component.css']
})
export class RegistrationSystemComponent implements OnInit {

  kisiler: Kisi[] = [
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

    seciliKisi: Kisi = new Kisi();

    baslik: string = "Yeni Kayıt";

    numaraDegiskeni: number = 0;

  constructor() { }

  ngOnInit() {
    this.seciliKisi.Id = 0;
  }

  KisiSil(k){
    var index = this.kisiler.indexOf(k);
    this.kisiler.splice(index,1);
    // Veri tabanından veriyi silme kodları vb.
  }

  KisiDuzenle(k: Kisi){
    this.seciliKisi = k;
    this.baslik = "Kayıt Düzenle";
  }

  Kaydet(){
    if(this.seciliKisi.Id == 0){
      var Id = Math.floor(Math.random() * 100);
      this.seciliKisi.Id = Id;
      console.log(this.seciliKisi);
      this.kisiler.push(this.seciliKisi);
    }

    this.seciliKisi = new Kisi();
    this.baslik = "Yeni Kayıt";
  }

  Onayla(){
    alert(this.numaraDegiskeni);
  }
}
