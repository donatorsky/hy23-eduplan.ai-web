import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OnInit } from '@angular/core';
import { Job, SuggesterService } from '../suggester.service';

@Component({
  selector: 'app-career-path',
  templateUrl: './career-path.component.html',
  styleUrls: ['./career-path.component.css']
})
export class CareerPathComponent implements OnInit{
  @Input() id: number|null
  plan: string[]

  constructor(private suggestion: SuggesterService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })

    this.plan = this.suggestion.getById(this.id || 0).plan
  }
}
