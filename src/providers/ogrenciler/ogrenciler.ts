import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Ogrenci } from '../../ogrenci';


/*
  Generated class for the OgrencilerProvider provider.

  See https://angular.io/guide/dependency-injection for <more info on providers
  and Angular DI.
*/
@Injectable()
export class OgrencilerProvider {
  kaynak='http://e-okulrehberlik.com/telefon/ogrenci_kimlikListe_getir.php';
  constructor(public http: Http) {
    console.log('Hello OgrencilerProvider Provider');
  }
  ListeGetir():Observable<Ogrenci[]>{
    console.log("liste cagrıldı");
    return this.http.get(this.kaynak).map(kayit=>kayit.json());
  }

}
