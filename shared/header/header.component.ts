import { Component, OnInit } from '@angular/core'; // Importación de los módulos necesarios de Angular
import { AuthService } from 'src/app/services/auth.service'; // Importación del servicio de autenticación

@Component({
  selector: 'app-header', // Selector para usar este componente en plantillas
  templateUrl: './header.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./header.component.scss'] // Ruta del archivo de estilos SCSS
})
export class HeaderComponent implements OnInit { // Definición de la clase del componente
  usuario: string = ''; // Variable para almacenar el nombre del usuario
  isLoggedIn: boolean = false; // Variable para almacenar el estado de autenticación del usuario

  constructor(private authService: AuthService) {} // Inyección del servicio de autenticación

  ngOnInit(): void {
    // Suscribirse al observable que proporciona el nombre del usuario
    this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario; // Actualiza la variable usuario con el nombre del usuario
    });

    // Suscribirse al observable que proporciona el estado de autenticación del usuario
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated; // Actualiza la variable isLoggedIn según el estado de autenticación
    });
  }
}
