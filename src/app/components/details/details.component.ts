import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Slides } from 'src/app/types/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @ViewChild('header') headerImage: ElementRef;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private renderer: Renderer2
  ) { }
  slide: Slides = {
    heading: "trip to tokyo",
    date: "10/19/2021",
    imageURL: "../../assets/images/neonlight.jpeg"
  }
  ngOnInit() {
    let coords = this.navParams.get('coords');
    this.slide = this.navParams.get('data');
    if (this.headerImage) {

      this.renderer.setStyle(this.headerImage.nativeElement, 'transform', `translate3d(0, ${coords.y - 56}px, 0) scale3d(1.2, 0.9, 1)`);
      this.renderer.setStyle(this.headerImage.nativeElement, 'transition', '0.1s ease-in-out');
    }
    setTimeout(() => {
      this.renderer.removeStyle(this.headerImage.nativeElement, 'transform');
    }, 50);
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
