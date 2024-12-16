import { NgModule } from '@angular/core'; // Importación del decorador NgModule
import { RouterModule, Routes } from '@angular/router'; // Importación de los módulos necesarios para el enrutamiento
import { LoginComponent } from './login/login.component'; // Importación del componente de inicio de sesión
import { HomeComponent } from './home/home.component'; // Importación del componente de inicio
import { QrComponent } from './qr/qr.component'; // Importación del componente para manejar códigos QR
import { VistaAlumnoComponent } from './vista-alumno/vista-alumno.component'; // Importación del componente para la vista del alumno
import { VistaProfesorComponent } from './vista-profesor/vista-profesor.component'; // Importación del componente para la vista del profesor
import { LogoutComponent } from './logout/logout.component'; // Importación del componente para cerrar sesión
import { RecuperarComponent } from './recuperar/recuperar.component'; // Importación del componente para recuperar contraseña
import { RegistrarComponent } from './registrar/registrar.component'; // Importación del componente para registrar un nuevo usuario

// Definición de las rutas de la aplicación
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige a 'home' si la ruta está vacía
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
  { path: 'recuperar', component: RecuperarComponent }, // Ruta para el componente de recuperación de contraseña
  { path: 'home', component: HomeComponent }, // Ruta para el componente de inicio
  { path: 'logout', component: LogoutComponent }, // Ruta para el componente de cierre de sesión
  { path: 'qr', component: QrComponent }, // Ruta para el componente de códigos QR
  { path: 'vista-alumno', component: VistaAlumnoComponent }, // Ruta para la vista del alumno
  { path: 'vista-profesor', component: VistaProfesorComponent }, // Ruta para la vista del profesor
  { path: 'registrar', component: RegistrarComponent }, // Ruta para el componente de registro de usuario
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importación del RouterModule con las rutas definidas
  exports: [RouterModule] // Exportación del RouterModule para que esté disponible en otros módulos
})
export class PageRoutingModule { } // Exportación del módulo de enrutamiento
