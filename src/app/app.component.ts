import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ExperiencePage } from '../pages/experience/experience';
import { ProjetsPage } from '../pages/projets/projets';
import { CompetencesPage } from '../pages/competences/competences';
import { FormationsPage } from '../pages/formations/formations';
import { ArticlesPage } from '../pages/articles/articles';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'A propos', component: AboutPage },

      { title: 'Experience', component: ExperiencePage },
      { title: 'Projets', component: ProjetsPage },
      { title: 'Compétences', component: CompetencesPage },
      { title: 'Formations', component: FormationsPage },
      { title: 'Articles', component: ArticlesPage },
      { title: 'Contact', component: ContactPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
