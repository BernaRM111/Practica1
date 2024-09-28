import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlGeneratorService {

  constructor() { }

  generateXML(): string {
    const xmlContent =`
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset >
      <url>
        <loc>https://www.sitiodeplantas.com/</loc>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://www.sitiodeplantas.com/about</loc>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://www.sitiodeplantas.com/contact</loc>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://www.sitiodeplantas.com/xml-download</loc>
        <priority>0.5</priority>
      </url>
    </urlset>
    `;
    return xmlContent.trim();
  }
}
