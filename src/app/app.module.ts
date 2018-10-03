// @angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { ModulesModule } from './modules/modules.module';

// services
import { HttpService } from './services/http/http.service';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaleListComponent } from './components/tale-list/tale-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModulesModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
