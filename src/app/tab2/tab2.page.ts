import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  bgcolor: string = 'white';
  visible: boolean = false;

  constructor(private cameraPreview: CameraPreview, public navCtrl: NavController, private speechRecognition: SpeechRecognition, public alertController: AlertController) { }
  ngOnInit() {
    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    let options = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      // camera: CameraPreview.CAMERA_DIRECTION.BACK, //use rear camera, by default is front one 
      toBack: true, //back button
      tapPhoto: true, //when you tap on the screen it "takes" picture
      tapFocus: false,
      previewDrag: false
    };
    if (this.cameraPreview.startCamera(options)) {
      console.log("camera is on");
    }
    else { console.log("not on") }

    //check for speech recognition permissions
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
          console.log("the word is " + this.bgcolor);
          this.checkWord(this.bgcolor);

        },
        (onerror) => console.log('error:', onerror)
      )
  }

  async checkWord(word: string) {
    if (word == 'mad') {
      // this.visible = true;
      const alert = await this.alertController.create({
        header: 'Correct',
        // subHeader: 'Subtitle',
        message: 'You are doing great! Keep up with the good work!',
        buttons: ['OK']
      });

      await alert.present();
    }
    else {
      // this.visible = false;
      const alert = await this.alertController.create({
        header: 'Sorry, could not understand that',
        // subHeader: 'Subtitle',
        message: 'You are doing great! Maybe it was me, who did not understood you right! Would you like to try again?',
        // buttons: ['Try again', 'Skip']
        buttons: [
          {
            text: 'Try again',
            handler: () => {

              this.start();
            }
          }, {
            text: 'Skip',
            handler: () => {
              console.log('Skip clicked');
            }
          }]
      });

      await alert.present();
    }
  }
}