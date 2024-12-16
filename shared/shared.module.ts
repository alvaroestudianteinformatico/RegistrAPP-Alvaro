import { NgModule } from '@angular/core'; // Importación de NgModule para definir un módulo
import { CommonModule } from '@angular/common'; // Importación del módulo común que proporciona directivas comunes
import { HeaderComponent } from './header/header.component'; // Importación del componente Header
import { FooterComponent } from './footer/footer.component'; // Importación del componente Footer
import { RouterLink } from '@angular/router'; // Importación de RouterLink para la navegación

@NgModule({
  declarations: [
    HeaderComponent, // Declaración del componente Header para que Angular lo reconozca
    FooterComponent // Declaración del componente Footer para que Angular lo reconozca
  ],
  imports: [
    CommonModule, // Importación del módulo común para utilizar directivas comunes
    RouterLink // Importación de RouterLink para habilitar enlaces de navegación
  ],
  exports: [
    HeaderComponent, // Exportación del componente Header para que esté disponible en otros módulos
    FooterComponent // Exportación del componente Footer para que esté disponible en otros módulos
  ]
})
export class SharedModule { } // Definición del módulo compartido
