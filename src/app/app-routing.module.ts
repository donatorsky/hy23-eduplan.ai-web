import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionComponent } from './profession/profession.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { CareerPathComponent } from './career-path/career-path.component';
import { CoursesComponent } from './courses/courses.component';
import { UniversitiesComponent } from './universities/universities.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profession', component: ProfessionComponent },
  { path: 'profession-list', component: ProfessionListComponent },
  { path: 'career-path', component: CareerPathComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'universities', component: UniversitiesComponent },
  { path: 'step1', component: Step1Component },
  { path: 'step2', component: Step2Component },
  { path: 'step3', component: Step3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
