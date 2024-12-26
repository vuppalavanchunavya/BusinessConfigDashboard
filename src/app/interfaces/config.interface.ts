export interface ConfigField {
  name: string;
  type: string;
  required: boolean;
  defaultValue: any;
  currentValue: any;
  description: string;
  placeholder?: string;
  options?: string[];
  defaultName?: string;
}
export interface ConfigGroup {
  [key: string]: ConfigField[];
}