import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component'; //Start
import { ImprintComponent } from './features/imprint/imprint.component';
import { DataProtectionComponent } from './features/data-protection/data-protection.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'imprint' , component: ImprintComponent },
  { path: 'data-protection' , component: DataProtectionComponent }  
];

const config = {
  /* instead of use extraOptions for Router */
  onSameUrlNavigation:
    'reload' /**fix to rescroll to same anchor url after scrolling */,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 80],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, <ExtraOptions>config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
