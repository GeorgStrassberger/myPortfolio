import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { ContactComponent } from './features/contact/contact.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ArrowDownLeftComponent } from './features/arrow-down-left/arrow-down-left.component';
import { ArrowDownRightComponent } from './features/arrow-down-right/arrow-down-right.component';
import { ProjectComponent } from './features/portfolio/project/project.component';
import { ImprintComponent } from './features/imprint/imprint.component';
import { DataProtectionComponent } from './features/data-protection/data-protection.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ArrowDownLeftComponent,
    ArrowDownRightComponent,
    ProjectComponent,
    ImprintComponent,
    DataProtectionComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
