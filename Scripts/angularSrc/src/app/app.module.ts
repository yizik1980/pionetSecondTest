import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { pageHandlerComponent } from './components/page-handler/page-handler.component';
import { pageListComponent } from './components/page-list/page-list.component'

import { pageCoverComponent } from './components/page-cover/page-cover.component';
import { HttpLoadingInterceptor } from './interceptors/http-loading.interceptor';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    pageHandlerComponent,
    pageListComponent,
    pageCoverComponent,
    GlobalLoaderComponent,
    HeaderComponent,
    SidebarComponent,
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
