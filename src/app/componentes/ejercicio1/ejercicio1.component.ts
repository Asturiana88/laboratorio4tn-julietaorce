import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.scss']
})
export class Ejercicio1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'login';
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  calcular() {
    this.promedio = (this.edadUno + this.edadDos) / 2
    this.suma = (this.edadUno + this.edadDos)
  }

  borrar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }

}
