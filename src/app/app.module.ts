import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgressbarComponent } from './ui/progressbar/progressbar.component';
import { HeaderComponent } from './ui/header/header.component';
import { StepTitleComponent } from './ui/step-title/step-title.component';
import { ProfessionComponent } from './profession/profession.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { CareerPathComponent } from './career-path/career-path.component';
import { CoursesComponent } from './courses/courses.component';
import { UniversitiesComponent } from './universities/universities.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { LoaderComponent } from './loader/loader.component';

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
    CoursesComponent,
    UniversitiesComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgPipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
