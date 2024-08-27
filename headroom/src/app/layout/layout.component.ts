import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { DataService } from '../common/services/data.service';
import { Country } from '../utils/interfaces';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CountriesListComponent],
  providers: [DataService],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  list: Country[] = [];

  constructor(private dataService: DataService) {
    this.list = this.dataService.getCountries();
  }


}
