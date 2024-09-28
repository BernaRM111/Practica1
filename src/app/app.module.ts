import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { XmlDownloadComponent } from './components/xml-download/xml-download.component';
import { XmlGeneratorService } from './services/xml-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AyudaComponent,
    ContactoComponent,
    XmlDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [XmlGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
