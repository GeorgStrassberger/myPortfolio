import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactComponent } from './features/contact/contact.component';
import { DataProtectionComponent } from './features/data-protection/data-protection.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ImprintComponent } from './features/imprint/imprint.component';
import { ProjectComponent } from './features/projects/project/project.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent},
  // { path: 'home' , component: HomeComponent },
  // { path: 'aboutme' , component: AboutMeComponent },
  // { path: 'skills' , component: SkillsComponent },
  // { path: 'projects' , component: ProjectsComponent },
  // { path: 'contact' , component: ContactComponent },
  // { path: 'footer' , component: FooterComponent },
  { path: 'imprint' , component: ImprintComponent },
  { path: 'data-protection' , component: DataProtectionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
