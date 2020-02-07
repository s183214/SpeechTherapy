import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// import { TabsPageRoutingModule } from './words-menu-routing.module';

import { WordsMenuComponent } from "./words-menu";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // TabsPageRoutingModule
    RouterModule.forChild([{ path: "", component: WordsMenuComponent }])
  ],
  declarations: [WordsMenuComponent]
})
export class WordsMenuComponentModule {}
