import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    'assets/pip2.png',
    'assets/pip1.png'
  ];
  prevSlide(carousel: any) {
    carousel.previousSlide();
  }

  nextSlide(carousel: any) {
    carousel.nextSlide();
  }
}
