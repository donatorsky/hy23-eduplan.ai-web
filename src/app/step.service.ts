import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private q1: string;
  private q2: string;
  private q3: string;
  private q4: string;
  private q5: string;
  private q6: string;

  constructor() { }

  public setQ1(q: string) {
    this.q1 = q;
  }

  public setQ2(q: string) {
    this.q2 = q;
  }
  
  public setQ3(q: string) {
    this.q3 = q;
  }
  
  public setQ4(q: string) {
    this.q4 = q;
  }
  
  public setQ5(q: string) {
    this.q5 = q;
  }
  
  public setQ6(q: string) {
    this.q6 = q;
  }

  public getQ1(): string {
    return this.q1;
  }

  public getQ2(): string {
    return this.q2;
  }

  public getQ3(): string {
    return this.q3;
  }

  public getQ4(): string {
    return this.q4;
  }

  public getQ5(): string {
    return this.q5;
  }

  public getQ6(): string {
    return this.q6;
  }
}
