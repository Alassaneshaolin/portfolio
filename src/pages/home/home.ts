import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	username: string="";
	password: string="";

  constructor(public navCtrl: NavController) {

  }
  ToAbout(){
    this.navCtrl.push(AboutPage);
  }

  login(){
    console.log("bouton cliqué");
    console.log(this.username);
    console.log(this.password);

  }
  cancel(){
    console.log("bouton cancel");
    this.username="";
    this.password="";

  }

}

export class Page {
}
