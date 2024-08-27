import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  height: number = 100;
  top: number = -50;
  translateY = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= 50) {
      this.top = 0;
      this.translateY = -50;
    } else {
      this.top = -50;
      this.translateY = 0;
    }
  }
}
