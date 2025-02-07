import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images: string[] = [
    'assets/images/LednicaGorna/Lednica_1.jpg',
    'assets/images/LednicaGorna/Lednica_2.jpg',
    'assets/images/LednicaGorna/Lednica_3.jpg',
    'assets/images/LednicaGorna/Lednica_4.jpg',
    'assets/images/LednicaGorna/Lednica_5.jpg',
    'assets/images/LednicaGorna/Lednica_6.jpg',
    'assets/images/LednicaGorna/Lednica_7.jpg',
    'assets/images/LednicaGorna/Lednica_8.jpg',
    'assets/images/LednicaGorna/Lednica_9.jpg',
    'assets/images/LednicaGorna/Lednica_10.jpg',
    'assets/images/Mietniow/Mietniow_1.jpg',
    'assets/images/Mietniow/Mietniow_2.jpg',
    'assets/images/Mietniow/Mietniow_3.jpg',
    'assets/images/Mietniow/Mietniow_4.jpg',
    'assets/images/Mietniow/Mietniow_5.jpg',
    'assets/images/Mietniow/Mietniow_6.jpg',
    'assets/images/Mietniow/Mietniow_7.jpg',
    'assets/images/Mietniow/Mietniow_8.jpg',
    'assets/images/Mietniow/Mietniow_9.jpg',
    'assets/images/Mietniow/Mietniow_10.jpg',
    'assets/images/Mietniow/Mietniow_11.jpg', // generator@adres.pl - 694984943 - bez facebook - bez instagrama - 32-420 Gdów ul. Winiary 98 - rzetelnosc zmienic - generator-deweloper.pl
  ];
  currentIndex: number = 0;

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
