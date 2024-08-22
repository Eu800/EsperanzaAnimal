import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ventana1Component } from './components/ventana1/ventana1.component';
import { AngularMaterialModule } from './angularmaterial.module';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    Ventana1Component
  ],
  declarations: [
    Ventana1Component
  ],
})
export class PresentacionModule { }
