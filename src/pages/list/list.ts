import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetayPage } from '../../pages/detay/detay';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {title:"BERKAY YILMAZ",note:"88",icon:this.icons[0]},
      {title:"OSMAN ÇELMELİ",note:"89",icon:this.icons[1]},
      {title:"EMRE GÜNGÖR",note:"90",icon:"paper-plane"}
    ];
    /*
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }

  itemTapped(event, item) {
    alert(item);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetayPage, {
      item: item
    });
  }
}
