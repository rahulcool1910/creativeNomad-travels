import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Slides } from 'src/app/types/types';
import { ModalController } from '@ionic/angular';
import { myFadeInAnimation } from 'src/app/constants/FadeInAnimation';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  @ViewChild('slideRef') slideRef: ElementRef
  @Input() slide: Slides = {
    heading: "trip to tokyo",
    date: "10/19/2021",
    imageURL: "../../assets/images/neonlight.jpeg"
  }
  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onClick(event: any) {
    // this.slideRef.nativeElement.classList.add("transition")
    // event.preventDefault()
    // setTimeout(() => {
    //   this.router.navigate(["/travel", "dfjsf"])
    //   this.slideRef.nativeElement.classList.remove("transition")
    // }, 1000)
    this.modalCtrl.create({
      component: DetailsComponent,
      enterAnimation: myFadeInAnimation,
      componentProps: {
        'coords': {
          x: event.target.x,
          y: event.target.y
        },
        data: this.slide
      }
    }).then((modal) => {
      modal.present();
    });
  }
}
