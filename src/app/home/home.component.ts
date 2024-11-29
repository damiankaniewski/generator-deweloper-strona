import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private scrollService: ScrollService) {}
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.scrollService.scrollToElement(element);
    }
  }
}
