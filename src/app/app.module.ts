import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  CommonModule} from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx/';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
      CommonModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
     
      HttpClientModule,
      IonicSelectableModule,
 
      
    ],
  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
