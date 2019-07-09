// @angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';

// locale
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es-ES');

// modules
import { ModulesModule } from './modules/modules.module';

// services
import { HttpService } from './services/http/http.service';

// components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TaleListComponent } from './components/tale-list/tale-list.component';
import { TaleComponent } from './components/tale/tale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaleListComponent,
    TaleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModulesModule,
    AppRoutingModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
