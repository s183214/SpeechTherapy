import { Component } from '@angular/core';
import { MirrorComponent } from '../mirror-component/mirror-component.page';
import { Router } from '@angular/router';
@Component({
  selector: 'words-menu',
  templateUrl: 'words-menu.html',
  styleUrls: ['words-menu.scss']
})
export class WordsMenuComponent {

  constructor(private router: Router) { }

  public gotoMirrorComponent() {
    this.router.navigate(['/mirror-component']);
  }
}
