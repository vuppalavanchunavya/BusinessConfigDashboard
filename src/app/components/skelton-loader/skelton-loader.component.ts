import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-skelton-loader',
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './skelton-loader.component.html',
  styleUrls: ['./skelton-loader.component.scss']
})
export class SkeltonLoaderComponent {
  @Input() count = 10;
  @Input() animation: 'progress' | 'progress-dark' | 'pulse' | 'false' | false = 'progress-dark';
  @Input() appearance: '' | 'circle' | 'line' | 'custom-content' = 'line';
  loading: boolean = false;
}
