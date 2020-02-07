// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { WordsMenuComponent } from "./words-menu";

// const routes: Routes = [
//   {
//     path: "tabs",
//     component: WordsMenuComponent,
//     children: [
//       {
//         path: "tab1",
//         children: [
//           {
//             path: "",
//             loadChildren: () =>
//               import("../levels-words/levels-words.module").then(
//                 m => m.LevelWordsComponentModule
//               )
//           }
//         ]
//       },
//       {
//         path: "tab2",
//         children: [
//           {
//             path: "",
//             loadChildren: () =>
//               import("../mirror-component/mirror-component.module").then(
//                 m => m.MirrorComponentModule
//               )
//           }
//         ]
//       },
//       {
//         path: "tab3",
//         children: [
//           {
//             path: "",
//             loadChildren: () =>
//               import("../tab3/tab3.module").then(m => m.Tab3PageModule)
//           }
//         ]
//       },
//       {
//         path: "",
//         redirectTo: "/tabs/tab1",
//         pathMatch: "full"
//       }
//     ]
//   },
//   {
//     path: "",
//     redirectTo: "/tabs/tab1",
//     pathMatch: "full"
//   }
// ];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class TabsPageRoutingModule {}
