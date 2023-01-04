import { CommonService } from './common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  search: string = '';
  coordinatesArr = [];
  maps = google.maps;
  polygonOptions: google.maps.PolygonOptions = {
    fillColor: '#FBBC05',
    strokeColor: '#FFCA28'
  }
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  zoom = 4;
  vertices: google.maps.LatLngLiteral[] = [
    {
      lat: 69.143789,
      lng: -146.226163
    }, {
      lat: 67.377183,
      lng: -142.785716
    }, {
      lat: 66.586288,
      lng: -145.292154
    }, {
      lat: 67.282808,
      lng: -150.0422422
    },
  ];
  vertices2: google.maps.LatLngLiteral[] = [{
    lat: 23.0376,
    lng: 72.5278
  },
  {
    lat: 21.1702,
    lng: 72.8311
  },
  {
    lat: 22.9778,
    lng: 72.4979
  },
  {
    lat: 22.3039,
    lng: 70.8022
  },];

  constructor(public commonService: CommonService) {

  }
  ngOnInit(): void {
  }
  getCoOrdinateFromStr() {
    this.commonService.getCoordinateFromJson(this.search).then(async (res: any) => {
      let temp = res[0].geojson.coordinates[0];
      console.log(this.vertices);
      await temp.forEach((latlng: any) => {
        this.vertices.push({ lat: latlng[0], lng: latlng[1] })
      });
      console.log(this.vertices);
    })
      .catch((err) => {
      })
  }



}
