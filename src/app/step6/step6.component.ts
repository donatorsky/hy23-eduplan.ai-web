import { Component } from '@angular/core';
import { StepService } from '../step.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component {
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
        this.service.setQ6(value)
        // this.router.navigate(['/step6'])
    }
  }
}
