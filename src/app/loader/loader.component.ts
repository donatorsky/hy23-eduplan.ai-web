import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private router: Router) {}

  ngOnInit() {

    setTimeout(() => {
        this.router.navigate(['/']);
    }, 10500);
  }
}
