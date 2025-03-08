export type FieldType = 'text' | 'email' | 'number' | 'select' | 'checkbox' | 'section';

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
  options?: string[];
  fields?: FormField[];
  placeholder?: string;
}

export interface FormSchema {
  title: string;
  fields: FormField[];
}

export interface FormData {
  [key: string]: any;
}