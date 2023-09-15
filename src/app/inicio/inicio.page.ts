import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  styles: [
    `
      capacitor-google-map {
        display: inline-block;
        width: 100%;
        height: 400px;
      }
    `,
  ],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;

  async createMap() {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:');

    this.newMap = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude,
        },
        zoom: 16,
      },
    });
  }
  presentingElement = document.querySelector('.fondoModal');
  mapLoaded = false;
  isModalOpen = false;
  constructor() {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.fondoModal');
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    //setTimeout(() => {
    this.createMap();
    //}, 3000);
  }

  public actionSheetButtons = [
    {
      text: 'Sí, cancelar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'No',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
}
