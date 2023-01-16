import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
// 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home' , component: HomeComponent },
  // { path: 'aboutme' , component: AboutMeComponent },
  // { path: 'skills' , component: SkillsComponent },
  // { path: 'projects' , component: ProjectsComponent },
  // { path: 'contact' , component: ContactComponent },
  // { path: 'footer' , component: FooterComponent },
  // { path: 'imprint' , component: FooterComponent },
  // { path: 'data-protection' , component: FooterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
