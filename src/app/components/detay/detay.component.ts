import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kisi } from 'src/app/models/kisi';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {

  seciliKisi: Kisi = new Kisi();
  
  constructor(
    public servis : DataService,
    public route : ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    var id = this.route.snapshot.params["id"];
    console.log(id);
    this.seciliKisi = this.servis.KayitById(id);
  }

  KayitSil(k: Kisi){
    this.servis.KayitSil(k);
    this.router.navigate(['/service']);
  }

}
