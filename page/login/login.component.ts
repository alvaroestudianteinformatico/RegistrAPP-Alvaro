import { Component, inject, OnInit } from '@angular/core';
// Importaciones necesarias para crear un componente y manejar el ciclo de vida
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Importaciones para construir formularios reactivos y validadores
import { routes } from '../page.routing.module';
// Importación de rutas (no se está utilizando en este fragmento)
import { Router } from '@angular/router';
// Importación del enrutador para navegar entre páginas
import { AuthService } from 'src/app/services/auth.service';
// Importación del servicio de autenticación
import { BehaviorSubject } from 'rxjs';
// Importación de BehaviorSubject para manejar estados reactivos

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
// Decorador que define el componente con su selector, template y estilos
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // Formulario para el login
  private readonly _fb: FormBuilder = inject(FormBuilder); // Inyección de FormBuilder
  private readonly _router = inject(Router); // Inyección de Router
  private readonly _authService = inject(AuthService); // Inyección del servicio de autenticación
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Sujeto para manejar el estado de login fallido
  loginFailed$ = this.loginFailedSubject.asObservable(); // Observable para el estado de login fallido
  loginFailed: boolean = false; // Variable para almacenar el estado de login fallido

  constructor() {
    // Constructor del componente
    this.loginForm = this._fb.group({
      // Inicialización del formulario reactivo
      username: ['', Validators.required], // Campo de nombre de usuario, requerido
      password: ['', Validators.required] // Campo de contraseña, requerido
    });

    console.log(this.loginForm); // Muestra el estado inicial del formulario en la consola
  }

  ngOnInit(): void {
    // Método del ciclo de vida que se ejecuta al inicializar el componente
    this._authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed);
    // Se suscribe al observable que indica si el inicio de sesión falló y actualiza la variable loginFailed
  }

  onSubmit() {
    // Método que se ejecuta al enviar el formulario
    const { username, password } = this.loginForm.value; // Desestructuración de los valores del formulario
    this._authService.login(username, password); // Llama al método de login del servicio de autenticación

    // Suscripción a los estados de autenticación y rol
    this._authService.isAuthenticated$.subscribe(isAuthenticated => {
      this._authService.rol$.subscribe(rol => {
        // Verifica si el usuario está autenticado y su rol
        if (isAuthenticated && rol === "profesor") {
          this._router.navigate(['/page/home']); // Redirige a la página de inicio para profesores
        } else if (isAuthenticated && rol === "alumno") {
          this._router.navigate(['/page/home']); // Redirige a la página de inicio para alumnos
        } else if (isAuthenticated && rol === "admin") {
          this._router.navigate(['/page/home']); // Redirige a la página de inicio para administradores
        } else {
          this.loginFailed = true; // Muestra mensaje de error si el login falla
        }
      });
    });
  }
}
