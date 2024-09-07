import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-env-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="env-preview" [class.collapsed]="collapsed">
      <div class="env-preview-header">
          <span>Preview ENV content</span>
          <div class="env-preview-actions">
            <button (click)="copyToClipboard()">Copy</button>
            <button (click)="toggleCollapse()">{{ collapsed ? 'Expand' : 'Collapse' }}</button>
          </div>
      </div>
      <div class="env-preview-content" *ngIf="!collapsed">
        <pre>{{ jsonToEnv(content) }}</pre>
      </div>
    </div>
  `,
  styleUrls: ['./env-preview.component.scss']
})
export class EnvPreviewComponent {
  @Input() content: Record<string, any> = {};
  collapsed: boolean = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  
  /**
   * Converts a JSON object to an ENV file format string.
   * 
   * @param {Object} json - The JSON object to convert.
   * @returns {string} The ENV file format string.
   * 
   * @example
   * const json = {
   *   "API_KEY": "12345",
   *   "API_SECRET": "abcdef"
   * };
   * const envString = jsonToEnv(json);
   * console.log(envString);
   * // Output:
   * // API_KEY=12345
   * // API_SECRET=abcdef
   */
  jsonToEnv(json: Record<string, any>): string {
    return Object.entries(json)
      .map(([key, value]) => `${key}=${String(value).trim()}`)
      .join('\n');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.jsonToEnv(this.content)).then(() => {
      alert('Copied to clipboard');
    });
  }
}