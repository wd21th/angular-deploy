import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiasComponent } from './dias/dias.component';
import { RakhatComponent } from './Rakhat/Rakhat.component';
import { TorgynComponent } from './torgyn/torgyn.component';

@NgModule({
  declarations: [			
    AppComponent,
      DiasComponent,
      RakhatComponent,
      TorgynComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
