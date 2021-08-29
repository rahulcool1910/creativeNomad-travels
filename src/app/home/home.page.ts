import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from '../types/types';
import { SwiperComponent } from 'swiper/angular';
import { slideOpts } from '../constants/coverflow';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = slideOpts

  ringsTop: any = {
    top: "2%",
    bottom: "",
    right: "",
    left: "5%"
  }

  ringsBottom: any = {
    top: "%",
    bottom: "-1%",
    right: "50%",
    left: "%"
  }

  slides: Slides[] = [
    {
      heading: "trip to tokyo",
      date: "10/19/2021",
      imageURL: "../../assets/images/neonlight.jpeg"
    },
    {
      heading: "trip to japan",
      date: "10/19/2021",
      imageURL: "../../assets/images/tokyo bg card back 2.png"
    },
    {
      heading: "trip to paris",
      date: "08/20/2020",
      imageURL: "../../assets/images/paris.jpeg"
    },
    {
      heading: "trip to delhi",
      date: "01/22/2019",
      imageURL: "../../assets/images/tajmahal.jpeg"
    },
    {
      heading: "trip to beijing",
      date: "09/25/2020",
      imageURL: "../../assets/images/tokyo bg card back 1.png"
    },
    {
      heading: "trip to rio",
      date: "09/25/1999",
      imageURL: "../../assets/images/rio.jpeg"

    }
  ]

  @ViewChild('swiper') swiper: SwiperComponent

  constructor() {}



}
