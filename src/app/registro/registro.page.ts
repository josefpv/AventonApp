import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre = '';
  apellido = '';
  email = '';
  password = '';
  passwordRepite = '';
  telefono = '';
  patente = '';
  marca = '';
  modelo = '';
  segment = 'estudiante';

  constructor() {}

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('cambio segmento...', ev.detail.value);
    this.segment = ev.detail.value;
  }

  onCreateAccount() {
    console.log('Creando cuenta....');
  }
}
