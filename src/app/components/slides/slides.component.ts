import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Slides } from 'src/app/types/types';
import { createAnimation, ModalController } from '@ionic/angular';
import { myFadeInAnimation } from 'src/app/constants/FadeInAnimation';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  @ViewChild('slideRef') slideRef: ElementRef
  @ViewChild('checkbox') checkbox: ElementRef
  @Input() slide: Slides = {
    heading: "trip to tokyo",
    date: "10/19/2021",
    imageURL: "../../assets/images/neonlight.jpeg"
  }
  constructor(private router: Router, private modalCtrl: ModalController, private pageRef: ElementRef<HTMLElement>, private ngZone: NgZone) { }

  ngOnInit() {
  }

  async onClick(event: any) {
    // this.slideRef.nativeElement.classList.add("transition")
    // setTimeout(() => {
      //   this.router.navigate(["/travel", "dfjsf"])
      //   this.slideRef.nativeElement.classList.remove("transition")
      // }, 1000)
    // console.log(event.currentTarget)
    // event.preventDefault()

    // this.modalCtrl.create({
    //   component: DetailsComponent,
    //   enterAnimation: myFadeInAnimation,
    //   componentProps: {
    //     'coords': {
    //       x: event.target.x,
    //       y: event.target.y
    //     },
    //     data: this.slide
    //   }
    // }).then((modal) => {
    //   modal.present();
    // });


  }

  // play(event): void {
  //   event.preventDefault()
  //   this.ngZone.runOutsideAngular(() => {
  //     this.animationItem.play();
  //   });

  // }

  like(event) {
    this.checkbox.nativeElement.checked = !this.checkbox.nativeElement.checked
    event.preventDefault()
  }
}
