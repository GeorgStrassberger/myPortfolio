import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ArrowDownLeftComponent } from './components/arrow-down-left/arrow-down-left.component';
import { ArrowDownRightComponent } from './components/arrow-down-right/arrow-down-right.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FillupPipe } from './shared/pipes/fillup.pipe';
import { ShortenPipe } from './shared/pipes/shorten.pipe';

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
    LandingComponent,
    FillupPipe,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
