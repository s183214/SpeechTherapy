import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MirrorComponentModule } from '../app/mirror-component/mirror-component.module';
import { WordsMenuComponentModule } from '../app/words-menu-component/words-menu.module';
import { Tab3PageModule } from '../app/tab3/tab3.module';
import { LevelWordsComponentModule } from './levels-words/levels-words.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, MirrorComponentModule, WordsMenuComponentModule, Tab3PageModule, LevelWordsComponentModule],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    CameraPreview,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
