import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { SlidesComponent } from '../components/slides/slides.component';
import { SwiperModule } from "swiper/angular";
import { SlideActionsComponent } from '../components/slide-actions/slide-actions.component';
import { RingsComponent } from '../components/rings/rings.component';
import { DetailsComponent } from '../components/details/details.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
  ],
  declarations: [HomePage, HeaderComponent, SlidesComponent, SlideActionsComponent, RingsComponent, DetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
