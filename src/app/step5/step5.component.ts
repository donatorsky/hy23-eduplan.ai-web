import { Component } from '@angular/core';
import { StepService } from '../step.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component {
  constructor(
    private service: StepService,
    private router: Router,
    ){}

  getDataAndGo() {
    let input = document.querySelectorAll('textarea')[0]

    console.log(input);

    let value = input.value || ''

    console.log(value);

    if (value.length < 3) {
      alert("Powiedz nam o sobie trochę więcej");
    } else {
        this.service.setQ5(value)
        this.router.navigate(['/step6'])
    }
  }
}
