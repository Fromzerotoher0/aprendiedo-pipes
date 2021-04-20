import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//cambiar idioma
import locales from '@angular/common/locales/es-CO';
import { registerLocaleData } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
registerLocaleData(locales);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PrimengModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    FieldsetModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
