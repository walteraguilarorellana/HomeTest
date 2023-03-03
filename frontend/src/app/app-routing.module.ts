import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CghistComponent } from './components/cghist/cghist.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'gitcommit', component: CghistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }