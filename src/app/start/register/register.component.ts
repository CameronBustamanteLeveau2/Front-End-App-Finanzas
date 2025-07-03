import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  tab: 'registro' | 'login' = 'registro';

  cambiarTab(nuevaTab: 'registro' | 'login') {
    this.tab = nuevaTab;
  }

  registrar() {
    console.log('Datos enviados:', { nombre: this.nombre, email: this.email });
    alert('¡Registro simulado exitosamente!');
  }
}
