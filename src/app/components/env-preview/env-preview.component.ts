import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-env-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './env-preview.component.html',
  styleUrls: ['./env-preview.component.scss']
})
export class EnvPreviewComponent {
  @Input() content: Record<string, any> = {};
  collapsed: boolean = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  jsonToEnv(json: Record<string, any>): string {
    return Object.entries(json)
      .map(([key, value]) => `${key}=${String(value).trim()}`)
      .join('\n');
  }

  copyToClipboard(): void {
    const jsonString = JSON.stringify(this.content, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      alert('Copied to clipboard in JSON format');
    });
  }
}
