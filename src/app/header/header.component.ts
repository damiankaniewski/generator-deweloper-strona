import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuActive: boolean = false;
  isVisible: boolean = false; // Flaga kontrolująca widoczność komponentu

  constructor(private scrollService: ScrollService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = scrollPosition > 20; // Ustaw widoczność na podstawie scrolla
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.scrollService.scrollToElement(element);
      this.menuActive = false;
    }
  }

  toggleMenu(): void {
    console.log('toggle');
    this.menuActive = !this.menuActive;
  }
}
