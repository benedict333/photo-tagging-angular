// image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  // Fetch an image as a Blob
  getImage(url: string): Observable<Blob> {
    // Use responseType: 'blob' to handle the response as a blob
    return this.http.get(url, { responseType: 'blob' });
  }
}
