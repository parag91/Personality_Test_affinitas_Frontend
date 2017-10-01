import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule ,JsonpModule }      from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule , MdRadioModule} from '@angular/material';
import {LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule } from './app-routing.module';
import { routingComponents} from './app-routing.module';
import { SwiperModule } from 'angular2-useful-swiper';
import { TestDetailComponent } from './test-details.component' ;
import {TestSubmitComponent} from './test-submission.component';
import {ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    AppComponent ,
    LoginComponent,
    routingComponents,
    TestDetailComponent,
    TestSubmitComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    NoopAnimationsModule,
    MdTabsModule,
    SwiperModule,
    MdRadioModule,
    AppRoutingModule  
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
