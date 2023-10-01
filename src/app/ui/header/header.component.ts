import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private location: Location){}

  @Input() step: number;
  @Input() text: string;
  @Input() close: boolean = true;
  @Input() back: boolean = true;

  goBack() {
    this.location.back();
  }
}
