import { Injectable } from '@angular/core'; // Importa el decorador Injectable de Angular
import { BehaviorSubject } from 'rxjs'; // Importa BehaviorSubject para manejar estados reactivos
import { usuariosSimulados } from '../models/data.models'; // Importa los datos simulados de usuarios

@Injectable({
  providedIn: 'root' // Permite que este servicio esté disponible a nivel de toda la aplicación
})
export class AuthService {

   // Comportamiento inicial del estado de autenticación (no autenticado)
   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
   isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Observable para el estado de autenticación

   // Comportamiento inicial del usuario logueado (vacío)
   private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado
   usuario$ = this.usuarioSubject.asObservable(); // Observable para el nombre del usuario logueado

   // Comportamiento inicial del rol del usuario logueado (vacío)
   private rolSubject = new BehaviorSubject<string>(''); // Para mostrar el rol del usuario actualmente logueado
   rol$ = this.rolSubject.asObservable(); // Observable para el rol del usuario logueado

   // Comportamiento inicial para el estado de fallos en la autenticación (no falló)
   private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
   loginFailed$ = this.loginFailedSubject.asObservable(); // Observable para el estado de fallos en la autenticación

  /*
  // Método de prueba para autenticación
  buscarDB(usuario: string, clave: string) {
    if (usuario === 'admin' && clave === 'admin') {
      this.isAuthenticatedSubject.next(true); // Cambia el estado a autenticado
      this.usuarioSubject.next(usuario); // Establece el nombre del usuario
      this.loginFailedSubject.next(false); // Indica que no falló la autenticación
    } else {
      this.isAuthenticatedSubject.next(false); // Cambia el estado a no autenticado
      this.loginFailedSubject.next(true); // Indica que falló la autenticación
    }
  }
  */

  // Método para manejar el login del usuario
  login(usuario: string, clave: string): void {
    // Busca el usuario en los datos simulados
    const usuarioEncontrado = usuariosSimulados.find(
       user => user.usuario === usuario && user.clave === clave
    );
    if (usuarioEncontrado) {
      // Si el usuario es encontrado, actualiza los estados
      this.isAuthenticatedSubject.next(true); // Cambia el estado a autenticado
      this.usuarioSubject.next(usuarioEncontrado.nombreCompleto); // Establece el nombre completo del usuario
      this.rolSubject.next(usuarioEncontrado.rol); // Establece el rol del usuario
      this.loginFailedSubject.next(false); // Indica que no falló la autenticación
    } else {
      // Si no se encuentra el usuario, actualiza los estados
      this.isAuthenticatedSubject.next(false); // Cambia el estado a no autenticado
      this.loginFailedSubject.next(true); // Indica que falló la autenticación
    }
  }

  // Método para manejar el logout del usuario
  logout(): void {
    this.usuarioSubject.next('');  // Resetea el nombre de usuario al desloguearse
    this.rolSubject.next(''); // Resetea el rol al desloguearse
    this.isAuthenticatedSubject.next(false); // Desloguea y desactiva el estado de autenticación
    this.loginFailedSubject.next(false); // Restablece loginFailed al cerrar sesión
  }
}
