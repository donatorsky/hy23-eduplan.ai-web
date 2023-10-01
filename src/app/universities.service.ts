import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface University {
  id: number
  name: string
  link: string
  voivodeship: string
  city: string
}

interface Specialization {
  id: number
  university_id: number
  name: string
  link: string
  level: string
  type: string
  profile: string
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private universities: University[];
  private specializations: Specialization[];

  constructor(private http: HttpClient) {
    this.http.get<University[]>('./assets/universities.json')
      .subscribe(res => this.universities = res);

    this.http.get<Specialization[]>('./assets/specializations.json')
      .subscribe(res => this.specializations = res);
  }

  public getUniversitiesBySpecialization(specialization: string): University[] {
    specialization = specialization.toLowerCase();

    const universityIds = this.specializations
      .filter(v => v.name.toLowerCase() == specialization)
      .map(v => v.university_id);

    return this.universities.filter(v => universityIds.indexOf(v.id) !== -1);
  }
}
