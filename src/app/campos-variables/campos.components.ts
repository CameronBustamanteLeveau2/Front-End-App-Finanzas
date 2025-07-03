import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amortizacion',
  templateUrl: './campos.components.html',
  styleUrls: ['./campos.components.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DecimalPipe
  ]
})
export class AmortizacionComponent {
  form: FormGroup;
  tablaAmortizacion: any[] = [];
  displayedColumns: string[] = ['periodo', 'amortizacion', 'intereses', 'cuotaTotal', 'saldoRestante'];
  formula: string = ''; // Para mostrar la fórmula
  resultado: string = ''; // Para mostrar el resultado

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      capital: [null, [Validators.required, Validators.min(0)]],
      plazo: [null, [Validators.required, Validators.min(1)]],
      tasaInteres: [null, [Validators.required, Validators.min(0)]],
    });
  }

  calcularAmortizacion() {
    console.log('Método calcularAmortizacion() ejecutado');

    const { capital, plazo, tasaInteres } = this.form.value;

    const i = tasaInteres / 100 / 12; // Tasa mensual
    const A = capital / plazo; // Amortización constante

    this.tablaAmortizacion = [];
    let saldoRestante = capital;

    for (let k = 1; k <= plazo; k++) {
      const interes = saldoRestante * 10/100;
      const cuotaTotal = A + interes;
      saldoRestante -= A;

      this.tablaAmortizacion.push({
        periodo: k,
        amortizacion: A,
        intereses: interes,
        cuotaTotal: cuotaTotal,
        saldoRestante: saldoRestante > 0 ? saldoRestante : 0,
      });
    }
  }

}
