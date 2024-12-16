import { NgModule } from '@angular/core'; // Importación de NgModule para definir un módulo
import { BrowserModule } from '@angular/platform-browser'; // Importación del módulo del navegador para aplicaciones web
import { RouteReuseStrategy } from '@angular/router'; // Importación de la estrategia de reutilización de rutas

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; // Importación de módulos de Ionic

import { AppComponent } from './app.component'; // Importación del componente raíz de la aplicación
import { AppRoutingModule } from './app-routing.module'; // Importación del módulo de enrutamiento de la aplicación

@NgModule({
  declarations: [AppComponent], // Declaración de los componentes que pertenecen a este módulo
  imports: [
    BrowserModule, // Importación del módulo del navegador
    IonicModule.forRoot(), // Inicialización del módulo Ionic
    AppRoutingModule, // Importación del módulo de enrutamiento
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, // Configuración de la estrategia de reutilización de rutas
  ],
  bootstrap: [AppComponent], // Componente raíz que se iniciará al cargar la aplicación
})
export class AppModule {} // Definición del módulo principal de la aplicación
