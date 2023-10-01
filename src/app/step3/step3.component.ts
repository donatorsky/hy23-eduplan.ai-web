import { Component } from '@angular/core';
import { StepService } from '../step.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component {
  constructor(
    private service: StepService,
    private router: Router,
    ){}


  getDataAndGo() {
    let tab: string[] = []
    let input = document.querySelectorAll('input[type=radio]:checked')

    if (input.length < 1) {
      alert("Zaznacz jedną opcję!");
    } else {
      input.forEach(function(el) {
        if (el.getAttribute("value")) {
          tab.push(el.getAttribute("value") ?? '')
        }
      });
  
      this.service.setQ3(tab.join(' oraz '))
      
      this.router.navigate(['/step4'])
    }
  }
}
