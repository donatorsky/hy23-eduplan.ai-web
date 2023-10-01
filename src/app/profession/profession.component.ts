import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OnInit } from '@angular/core';
import { Job, SuggesterService } from '../suggester.service';
import { UniversitiesService } from '../universities.service';
@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {
  @Input() id: number|null
  profession: Job

  constructor(
    private suggestion: SuggesterService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })

    this.profession = this.suggestion.getById(this.id || 0)
  }
}
