import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ExperiencePage } from '../pages/experience/experience';
import { ProjetsPage } from '../pages/projets/projets';
import { CompetencesPage } from '../pages/competences/competences';
import { FormationsPage } from '../pages/formations/formations';
import { ArticlesPage } from '../pages/articles/articles';
import { ContactPage } from '../pages/contact/contact';
import { ProvartProvider } from '../providers/provart/provart';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ExperiencePage,
    ProjetsPage,
    CompetencesPage,
    FormationsPage,
    ArticlesPage,
    ContactPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ExperiencePage,
    ProjetsPage,
    CompetencesPage,
    FormationsPage,
    ArticlesPage,
    ContactPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvartProvider,

  ]
})
export class AppModule {}
