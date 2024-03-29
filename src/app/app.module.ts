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
import { ContactButton } from './components/buttons/contact-btn/contact-btn.component';
import { ProjectButton } from './components/buttons/project-btn/project-btn.component';
// Tanslate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PopupComponent } from './components/popup/popup.component';
import { SlopeComponent } from './components/slope/slope.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    PopupComponent,
    ContactButton,
    ProjectButton,
    SlopeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
