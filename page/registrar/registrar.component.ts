import { Component, OnInit } from '@angular/core'; // Importaciones necesarias para el componente y su ciclo de vida
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importaciones para crear y validar formularios
import { AlertController } from '@ionic/angular'; // Importación para mostrar alertas en la interfaz de usuario

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
// Decorador que define el componente con su selector, plantilla y estilos
export class RegistrarComponent implements OnInit {
  registrarForm: FormGroup; // Variable para almacenar el formulario de registro
  correoRecuperacion: string = ''; // Variable para almacenar el correo de recuperación

  constructor(
    private fb: FormBuilder, // Inyección de FormBuilder para crear el formulario
    private alertController: AlertController // Inyección de AlertController para mostrar alertas
  ) {
    // Inicialización del formulario con validaciones
    this.registrarForm = this.fb.group({
      nombre: ['', Validators.required], // Nombre es obligatorio
      correo: ['', [Validators.required, Validators.email]], // Correo es obligatorio y debe ser un correo válido
      contrasena: ['', [Validators.required, Validators.minLength(6)]], // Contraseña es obligatoria y debe tener al menos 6 caracteres
      número: ['', [Validators.required, Validators.minLength(6)]], // Número es obligatorio y debe tener al menos 6 caracteres
      rol: ['', Validators.required], // Rol es obligatorio
      comuna: ['', Validators.required], // Comuna es obligatoria
      correoRecuperacion: ['', [Validators.email]], // Correo de recuperación debe ser un correo válido
    });
  }

  // Método para mostrar alertas
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Información', // Título de la alerta
      message: mensaje, // Mensaje a mostrar
      buttons: ['OK'], // Botón para cerrar la alerta
    });
    await alert.present(); // Muestra la alerta
  }

  // Validación y procesamiento al enviar el formulario
  async onSubmit() {
    if (this.registrarForm.valid) {
      // Si el formulario es válido, mostrar mensaje de éxito
      await this.mostrarAlerta('Usuario registrado correctamente.');
      console.log('Datos registrados:', this.registrarForm.value); // Imprime los datos en la consola
    } else {
      // Si hay errores en el formulario, mostrar mensaje de error
      await this.mostrarAlerta('Por favor, completa todos los campos requeridos correctamente.');
    }
  }

  // Validación y procesamiento para la recuperación de contraseña
  async recuperarContrasena() {
    const correoRecuperacionControl = this.registrarForm.get('correoRecuperacion'); // Obtiene el control del formulario

    if (correoRecuperacionControl && correoRecuperacionControl.valid) {
      // Si el correo de recuperación es válido
      await this.mostrarAlerta('Link enviado a: ' + correoRecuperacionControl.value);
    } else {
      // Si el correo no es válido o está vacío
      await this.mostrarAlerta('Por favor ingresa un correo válido.');
    }
  }

  ngOnInit() {
    console.log('ngOnInit llamado'); // Mensaje para indicar que el componente ha sido inicializado
  }
}
