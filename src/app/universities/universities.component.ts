import { Component, Input } from '@angular/core';
import { UniversitiesService, University } from '../universities.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {
  @Input() name: string
  universities: University[]

  constructor(private location: Location, private university: UniversitiesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name') || ''
    })

    setTimeout(() => {
      this.universities = this.university.getUniversitiesBySpecialization(this.name)
    }, 2500);
    
  }

  goBack() {
    this.location.back();
  }
}
