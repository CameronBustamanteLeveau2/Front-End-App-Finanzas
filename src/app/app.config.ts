import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AmortizacionComponent } from './campos-variables/campos.components'; // Asegúrate de que la ruta sea correcta

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: '/',
        component: AmortizacionComponent // Cambié de Campos a AmortizacionComponent
      }
    ])
  ]
};
