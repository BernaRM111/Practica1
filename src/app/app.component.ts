import { Component } from '@angular/core';
import { XmlGeneratorService } from './services/xml-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica1';

  constructor(private xmlGeneratorService: XmlGeneratorService) {}

  downloadXML() {
    const xmlContent = this.xmlGeneratorService.generateXML();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'site.xml';
    link.click();
  }
}
