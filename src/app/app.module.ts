import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ViewModule
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
