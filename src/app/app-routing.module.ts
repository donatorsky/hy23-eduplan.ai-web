import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionComponent } from './profession/profession.component';
import { ProfessionListComponent } from './profession-list/profession-list.component';
import { CareerPathComponent } from './career-path/career-path.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profession', component: ProfessionComponent },
  { path: 'profession-list', component: ProfessionListComponent },
  { path: 'career-path', component: CareerPathComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
