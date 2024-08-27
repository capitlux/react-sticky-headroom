import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from 'src/app/utils/interfaces';

@Component({
  selector: 'countries-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css',
})
export class CountriesListComponent {
  @Input() countries: Country[] = [];
  @Input() scrollIsDown: boolean = false;
  @Input() height: number = 100;
}
