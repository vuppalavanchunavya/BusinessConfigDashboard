import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnvFormComponent } from './components/env-form/env-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EnvConfigService } from './services/env-config.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EnvFormComponent,
    HttpClientModule,
    ToastrModule
  ],
  providers: [
    EnvConfigService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'env-dashboard-frontend';
}