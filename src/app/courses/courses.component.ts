import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OnInit } from '@angular/core';
import { Job, SuggesterService } from '../suggester.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() id: number|null
  specializations: string[]

  constructor(private suggestion: SuggesterService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })

    this.specializations = this.suggestion.getById(this.id || 0).specializations
  }
}
