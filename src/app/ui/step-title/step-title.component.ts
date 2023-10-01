import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-step-title',
  templateUrl: './step-title.component.html',
  styleUrls: ['./step-title.component.css']
})
export class StepTitleComponent {
  @Input() header: string;
  @Input() description: string;
}
