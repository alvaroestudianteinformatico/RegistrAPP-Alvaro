import { NgModule } from '@angular/core'; // Importación de NgModule para definir un módulo
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; // Importación de funcionalidades para el enrutamiento

// Definición de las rutas de la aplicación
const routes: Routes = [
  {
    path: 'page', // Ruta que carga el módulo de página
    loadChildren: () => import('./page/page.module').then(m => m.PageModule) // Carga perezosa del módulo PageModule
  },
  {
    path: '', // Ruta vacía redirige a la ruta por defecto
    redirectTo: 'page', // Redirección a 'page'
    pathMatch: 'full' // Asegura que coincida con la ruta completa
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Configuración de las rutas con la estrategia de precarga
  ],
  exports: [RouterModule] // Exportación de RouterModule para que esté disponible en otros módulos
})
export class AppRoutingModule { } // Definición del módulo de enrutamiento
