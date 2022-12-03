import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './countries.mock-data';
import { Country } from './country.interfece';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countries: Country[] = COUNTRIES;
  selectedCapital!: string

  constructor() { }

  ngOnInit(): void {
    console.log(this.countries);
  }

  onSelect(contry: Country): void {
    console.log(contry);
    this.selectedCapital = contry.capital;
  }
}
