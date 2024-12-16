import { Component, OnInit } from '@angular/core'; // Importaciones necesarias para el componente y su ciclo de vida

@Component({
  selector: 'app-vista-alumno', // Selector del componente que se usará en la plantilla
  templateUrl: './vista-alumno.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./vista-alumno.component.scss'], // Ruta del archivo de estilos SCSS
})
// Decorador que define el componente con su selector, plantilla y estilos
export class VistaAlumnoComponent implements OnInit {

  constructor() { } // Constructor del componente, se pueden inyectar servicios aquí si es necesario

  ngOnInit() {
    console.log('ngOnInit llamado'); // Mensaje para indicar que el componente ha sido inicializado
  }
}
