import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToElement(element: HTMLElement, offset: number = 100): void {
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetValue = elementTop - offset;
      window.scrollTo({ top: offsetValue, behavior: 'smooth' });
    }
  }
}
