import { NgModule } from '@angular/core'; // Importación del decorador NgModule
import { CommonModule } from '@angular/common'; // Módulo común de Angular que proporciona directivas comunes
import { IonicModule } from '@ionic/angular'; // Módulo de Ionic que permite usar componentes de Ionic
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Módulos para trabajar con formularios
import { RouterModule } from '@angular/router'; // Módulo para gestionar el enrutamiento
import { PageRoutingModule } from './page.routing.module'; // Importación del módulo de enrutamiento de la página

// Importación de componentes de la página
import { LoginComponent } from './login/login.component'; // Componente de inicio de sesión
import { HomeComponent } from './home/home.component'; // Componente de inicio
import { QrComponent } from './qr/qr.component'; // Componente para manejar códigos QR
import { VistaAlumnoComponent } from './vista-alumno/vista-alumno.component'; // Componente para la vista del alumno
import { VistaProfesorComponent } from './vista-profesor/vista-profesor.component'; // Componente para la vista del profesor
import { LogoutComponent } from './logout/logout.component'; // Componente para cerrar sesión
import { RecuperarComponent } from './recuperar/recuperar.component'; // Componente para recuperar contraseña
import { RegistrarComponent } from './registrar/registrar.component'; // Componente para registrar un nuevo usuario
import { SharedModule } from '../shared/shared.module'; // Importación del módulo compartido

@NgModule({
  declarations: [
    // Declaración de los componentes que pertenecen a este módulo
    LoginComponent,
    RecuperarComponent,
    HomeComponent,
    LogoutComponent,
    QrComponent,
    VistaAlumnoComponent,
    VistaProfesorComponent,
    RegistrarComponent,
  ],
  imports: [
    // Importación de otros módulos que este módulo necesita
    CommonModule, // Módulo común
    FormsModule, // Módulo para formularios
    ReactiveFormsModule, // Módulo para formularios reactivos
    IonicModule, // Módulo de Ionic
    PageRoutingModule, // Módulo de enrutamiento de la página
    SharedModule, // Módulo compartido
    RouterModule // Módulo de enrutamiento
  ]
})
export class PageModule {} // Exportación del módulo PageModule
