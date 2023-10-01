import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { SuggesterService } from '../suggester.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(
    private router: Router,
    private suggestion: SuggesterService,
    private step: StepService,
    ) {}

  ngOnInit() {
    console.log(this.step.getQ1())
    console.log(this.step.getQ2())
    console.log(this.step.getQ3())
    console.log(this.step.getQ4())
    console.log(this.step.getQ5())
    console.log(this.step.getQ6())

    this.suggestion.suggest(
      this.step.getQ1(),
      this.step.getQ2(),
      this.step.getQ3(),
      this.step.getQ4(),
      this.step.getQ5(),
      this.step.getQ6()
      ).subscribe(() => {setTimeout(() => {
        this.router.navigate(['profession-list']);
    }, 2500);})
  }
}
