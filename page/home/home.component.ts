import { Component, OnInit } from '@angular/core';
// Importaciones necesarias para el componente y el ciclo de vida de Angular
import { AuthService } from 'src/app/services/auth.service';
// Importación del servicio de autenticación

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// Decorador que define el componente con su selector, template y estilos
export class HomeComponent implements OnInit {
  // Clase del componente

  usuario: string = ''; // Variable para almacenar el nombre del usuario
  isLoggedIn: boolean = false; // Variable para almacenar el estado de login

  constructor(private authService: AuthService) {}
  // Constructor que inyecta el servicio de autenticación

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta al inicializar el componente
    // Suscribirse al observable para obtener el estado de autenticación y el nombre del usuario

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
      // Actualiza la variable isLoggedIn según el estado de autenticación
    });

    this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      // Actualiza la variable usuario con el nombre del usuario autenticado
    });
  }
}
