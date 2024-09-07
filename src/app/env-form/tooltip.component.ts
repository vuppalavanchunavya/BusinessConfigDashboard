import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tooltip-container" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
      <label class="tooltip-label">
        <ng-content></ng-content>
        <!-- <b style="cursor: pointer;">i</b> -->
      </label>
      <div class="tooltip-content" [class.show]="show">
        <div>{{ description }}</div>
        <div>Default Value: <code>{{ defaultValue }}</code></div>
      </div>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() description: string = '';
  @Input() defaultValue: any = '';
  show: boolean = false;

  onMouseEnter() {
    this.show = true;
  }

  onMouseLeave() {
    this.show = false;
  }
}