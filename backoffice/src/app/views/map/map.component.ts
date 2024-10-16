import { AfterViewInit, Component } from '@angular/core';
import * as leaflet from "leaflet";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 
  private map:any;

  defaultIcon = leaflet.icon({
    iconUrl: 'https://www.cp-desk.com/wp-content/uploads/2019/02/map-marker-free-download-png-300x300.png',
    iconSize: [30, 30], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  initMap(): void {
     
    
    this.map = leaflet.map('map', {
      center: [ 30,10],
      zoom: 3
    });


    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

 

   this.getDATA();

  }
  constructor(private api:ApiService){ 
    
  }


  getDATA(){
    this.api.getMarkersFromServer().toPromise().then((res:any)=>{
      console.log(res);

      res.map((m:any)=>{
        leaflet.marker([m.latitude,m.longitude]).setIcon(this.defaultIcon).addTo(this.map);
      })
      
    })
  }
  ngAfterViewInit(): void {
   this.initMap();

  }
}
