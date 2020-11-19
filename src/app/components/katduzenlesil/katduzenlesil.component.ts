import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kategori } from 'src/app/models/kategori';
import { Sonuc } from 'src/app/models/sonuc';
import { EtradeService } from 'src/app/services/etrade.service';

@Component({
  selector: 'app-katduzenlesil',
  templateUrl: './katduzenlesil.component.html',
  styleUrls: ['./katduzenlesil.component.css']
})
export class KatduzenlesilComponent implements OnInit {

  katId: number;
  islem: number;
  secKat: Kategori = new Kategori();
  katSonuc: Sonuc = new Sonuc();

  constructor(
    public servis: EtradeService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.katId = this.route.snapshot.params["id"];
    this.islem = this.route.snapshot.params["islem"];
    this.secKat = this.servis.KategoriById(this.katId);
  }

  Kaydet() {
    this.katSonuc = this.servis.KategoriDuzenle(this.secKat);
  }

  Sil() {
    this.katSonuc = this.servis.KategoriSil(this.secKat);
  }

}
