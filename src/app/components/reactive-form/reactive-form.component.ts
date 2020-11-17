import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formKayit: FormGroup;

  // constructor componentin HTML'i yüklenmeden önce çalışır.
  constructor() {
    this.formKayit = new FormGroup({
      adSoyad: new FormControl(),
      mail: new FormControl(),
      yas: new FormControl()
    });
  }

  // ngOnInit componentin HTML'i yüklendikten hemen sonra çalışır.
  ngOnInit() {
    // .patchValue forma varsayılan değer atamayı sağlar.
    this.formKayit.patchValue({
      adSoyad:"Arcan",
      mail:"arc@gmail.com",
      yas:24
    });
  }

  Kaydet(){
    console.log(this.formKayit.value);
    console.log("Adı Soyadı: " + this.formKayit.value.adSoyad);
    console.log("E-posta: " + this.formKayit.value.mail);
    console.log("Yaş: " + this.formKayit.value.yas);
  }
}
