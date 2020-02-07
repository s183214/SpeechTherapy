import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MirrorComponent } from './mirror-component/mirror-component.page';
import { WordsMenuComponent } from '../app/words-menu-component/words-menu';
import { Tab3Page } from '../app/tab3/tab3.page';
import { LevelWordsComponent } from './levels-words/levels-words.page';

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
  },
  {
    path: 'tab3-component', component: Tab3Page
  },
  {
    path: 'levels-words', component: LevelWordsComponent
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
