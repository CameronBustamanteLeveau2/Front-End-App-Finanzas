import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'; // Asegúrate de importar MatSidenavModule
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,  // Asegúrate de importar MatSidenavModule aquí también
    MatButtonModule,
    MatCardModule,
    MatNavList,
    MatListItem,
    MatIcon,

  ]
})
export class AppComponent {
    title(title: any) {
        throw new Error('Method not implemented.');
    }
}
