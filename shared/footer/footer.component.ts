import { Component, OnInit } from '@angular/core'; // Importación de los módulos necesarios de Angular
import { AuthService } from 'src/app/services/auth.service'; // Importación del servicio de autenticación

@Component({
  selector: 'app-footer', // Selector para usar este componente en plantillas
  templateUrl: './footer.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./footer.component.scss'] // Ruta del archivo de estilos SCSS
})
export class FooterComponent implements OnInit { // Definición de la clase del componente
  isLoggedIn: boolean = false; // Variable para almacenar el estado de autenticación del usuario
  rol: string = ''; // Variable para almacenar el rol del usuario (ej. profesor, alumno)

  constructor(private authService: AuthService) {} // Inyección del servicio de autenticación

  ngOnInit(): void {
    // Suscribirse al estado de autenticación del usuario
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated; // Actualiza la variable isLoggedIn
    });

    // Suscribirse al rol del usuario
    this.authService.rol$.subscribe(rol => {
      this.rol = rol; // Actualiza la variable rol con el rol del usuario
    });
  }
}
