import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnvFormComponent } from './env-form/env-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnvFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'env-dashboard-frontend';
}
