import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RingsComponent } from '../components/rings/rings.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'travel',
    component: RingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
