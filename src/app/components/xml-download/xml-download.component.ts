
import { Component } from '@angular/core';
import { XmlGeneratorService } from '../../services/xml-generator.service';

@Component({
  selector: 'app-xml-download',
  templateUrl: './xml-download.component.html',
  styleUrls: ['./xml-download.component.css']
})
export class XmlDownloadComponent {

  constructor(private xmlService: XmlGeneratorService) { }

  downloadXML() {
    const xmlContent = this.xmlService.generateXML();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'descarga.xml';
    link.click();

    window.URL.revokeObjectURL(url);
  }
}

