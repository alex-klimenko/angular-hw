import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-component',
  template: `
    <div class="gallery-wrap">
      <img [src]="photos[0]" alt="photo1" (click)="clickHandler(photos[0])">
      <img [src]="photos[1]" alt="photo2" (click)="clickHandler(photos[1])">
      <img [src]="photos[2]" alt="photo3" (click)="clickHandler(photos[2])">
      <img [src]="photos[3]" alt="photo4" (click)="clickHandler(photos[3])">
    </div>
  `,
  styleUrls: [
    './style.css'
  ]
})

export class GalleryComponent {
  @Input()
  public photos: string[];

  @Output()
  public photoSrc: EventEmitter<string> = new EventEmitter();

  public clickHandler(srcImg: string): void {
    this.photoSrc.emit(srcImg);
  }
}
