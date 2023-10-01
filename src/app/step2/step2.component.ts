import { Component } from '@angular/core';
import { StepService } from '../step.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})

export class Step2Component {
  constructor(
    private service: StepService,
    private router: Router,
    ){}

  getDataAndGo() {
    let tab: string[] = []
    let input = document.querySelectorAll('input[type=checkbox]:checked')

    if (input.length < 1) {
      alert("Zaznacz conajmniej jedną opcję!");
    } else {
      input.forEach(function(el) {
        if (el.getAttribute("value")) {
          tab.push(el.getAttribute("value") ?? '')
        }
      });
  
      this.service.setQ2(tab.join(' oraz '))
      
      this.router.navigate(['/step3'])
    }
  }
}
