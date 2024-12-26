import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() description: string = '';
  @Input() defaultValue: any = '';
  show: boolean = false;

  onMouseEnter(): void {
    this.show = true;
  }

  onMouseLeave(): void {
    this.show = false;
  }
}