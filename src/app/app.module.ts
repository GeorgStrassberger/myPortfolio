import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { ContactComponent } from './features/contact/contact.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { SkillsComponent } from './features/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
