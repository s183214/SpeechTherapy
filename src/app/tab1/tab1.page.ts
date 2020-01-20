import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bgcolor: string = 'white';

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition) {

  }

  ngOnInit() {

    // Get the list of supported languages
    this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: Array<string>) => console.log(languages),
        (error) => console.log(error)
      )

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      });

  }

  start() {
    let options = {
      language: 'da-DK',
      showPopup: false
    }

    this.speechRecognition.startListening(options)
      .subscribe(
        (matches: Array<string>) => {
          console.log(matches);
          this.bgcolor = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )
  }
}
