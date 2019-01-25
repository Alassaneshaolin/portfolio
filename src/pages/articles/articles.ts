import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProvartProvider, } from '../../providers/provart/provart';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
  articles: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public provartProvider: ProvartProvider) {
    this.getarticles();
  }

  getarticles() {
    this.provartProvider.getarticles()
      .then(data => {
        this.articles = data;
        console.log(this.articles);
      });
  }

  public openDetails( event ,articles )
  {
    this.navCtrl.push(ArticlesPage,{
      articles:articles
    });
  }

}
