import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SuggesterService } from '../suggester.service';
import { Job } from '../suggester.service';

@Component({
  selector: 'app-profession-list',
  templateUrl: './profession-list.component.html',
  styleUrls: ['./profession-list.component.css']
})
export class ProfessionListComponent implements OnInit {
  constructor(private suggestion: SuggesterService) {}

  professions: Job[] = []

  ngOnInit(): void {
    this.professions = this.suggestion.getAll()
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
