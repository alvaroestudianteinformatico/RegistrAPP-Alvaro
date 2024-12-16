import { Component, inject, OnInit } from '@angular/core';
// Importaciones necesarias para crear un componente y manejar el ciclo de vida
import { AuthService } from 'src/app/services/auth.service';
// Importación del servicio de autenticación

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
// Decorador que define el componente con su selector, template y estilos
export class LogoutComponent implements OnInit {

  private authService = inject(AuthService); // Inyección del servicio de autenticación

  constructor() {}
  // Constructor del componente

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta al inicializar el componente
    this.authService.logout(); // Llama al método de logout del servicio para cerrar la sesión
  }
}
