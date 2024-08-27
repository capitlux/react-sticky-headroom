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
  private lastScrollTop = 0;
  scrollIsDown: boolean = true;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      this.scrollIsDown = true;
    } else {
      this.scrollIsDown = false;
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  constructor(private dataService: DataService) {
    this.list = this.dataService.getCountries();
  }
}
