import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "levels-words",
  templateUrl: "levels-words.page.html",
  styleUrls: ["levels-words.page.scss"]
})
export class LevelWordsComponent {
  constructor(private router: Router) {}

  public gotoMirrorComponent() {
    this.router.navigate(["/mirror-component"]);
  }
}
