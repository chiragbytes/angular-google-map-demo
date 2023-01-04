import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getCoordinateFromJson(str: string) {
    return this.http
      .get(`https://nominatim.openstreetmap.org/search.php?q=${str}&polygon_geojson=1&format=json`)
      .toPromise();
  }
}
