import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationmapPage } from './locationmap';

@NgModule({
  declarations: [
    LocationmapPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationmapPage),
  ],
})
export class LocationmapPageModule {}
