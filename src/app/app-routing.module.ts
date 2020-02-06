import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MirrorComponent } from './mirror-component/mirror-component.page';
import { WordsMenuComponent } from '../app/words-menu-component/words-menu';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./words-menu-component/words-menu.module').then(m => m.WordsMenuComponentModule)
  },
  {
    path: 'mirror-component', component: MirrorComponent
  },
  {
    path: 'words-menu', component: WordsMenuComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
