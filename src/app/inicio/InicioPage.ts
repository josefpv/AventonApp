import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

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

  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {}

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

  @ViewChild(IonCard, { read: ElementRef })
  card: ElementRef<HTMLIonCardElement>;

  presentingElement = document.querySelector('.fondoModal');
  mapLoaded = false;
  isModalOpen = false;

  ngOnInit() {
    this.presentingElement = document.querySelector('.fondoModal');
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blueviolet', '#1c2ec9');
    setTimeout(() => {
      this.animation.play();
    }, 2000);
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
