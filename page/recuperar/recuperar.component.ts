import { Component, OnInit } from '@angular/core';
// Importaciones necesarias para crear un componente y manejar el ciclo de vida

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
// Decorador que define el componente con su selector, plantilla y estilos
export class RecuperarComponent implements OnInit {

  constructor() { }
  // Constructor del componente, no realiza ninguna inicialización en este caso

  ngOnInit() {
    // Método del ciclo de vida que se ejecuta al inicializar el componente
    console.log('ngOnInit llamado'); // Mensaje en la consola para verificar que el componente se ha inicializado
  }

}
