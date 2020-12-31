import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { pageHandlerComponent } from './componets/page-handler/page-handler.component';
import { pageListComponent } from './componets/page-list/page-list.component'

import { pageCoverComponent } from './componets/page-cover/page-cover.component';
import { HttpLoadingInterceptor } from './interceptors/http-loading.interceptor';
import { GlobalLoaderComponent } from './componets/loader/global-loader/global-loader.component';
import { HeaderComponent } from './componets/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    pageHandlerComponent,
    pageListComponent,
    pageCoverComponent,
    GlobalLoaderComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
