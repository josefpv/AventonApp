import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = '';
  password = '';
  isOpentoast = false;

  constructor(private router: Router) {}

  setToastOpen(value: boolean) {
    this.isOpentoast = value;
  }

  onLogin() {
    let validado = true;

    if (this.usuario.length <= 0 || this.usuario.length <= 0) {
      validado = false;
    }

    if (!validado) {
      this.setToastOpen(true);
      /*      setTimeout(() => {
        this.setToastOpen(false);
      }, 3000); */
    } else {
      this.router.navigate(['/inicio']);
    }
  }
}
