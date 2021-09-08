import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rutas: Router) { }

  ngOnInit(): void {
  }

  siguiente() {
    console.log("Holis");
    this.rutas.navigate(['home']);
  }
}
