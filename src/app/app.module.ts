import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgressbarComponent } from './ui/progressbar/progressbar.component';
import { HeaderComponent } from './ui/header/header.component';
import { StepTitleComponent } from './ui/step-title/step-title.component';
import { ProfessionComponent } from './profession/profession.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { CareerPathComponent } from './career-path/career-path.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressbarComponent,
    HeaderComponent,
    StepTitleComponent,
    ProfessionComponent,
    ProfessionListComponent,
    CareerPathComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
