import { Injectable } from '@angular/core';
import { countries } from 'src/app/utils/data';
import { Country } from 'src/app/utils/interfaces';

@Injectable()
export class DataService {
  constructor() {}
  getCountries(): Country[] {
    return countries;
  }
}
