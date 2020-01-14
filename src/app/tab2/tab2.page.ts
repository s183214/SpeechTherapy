import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private cameraPreview: CameraPreview) { }
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
  }
}