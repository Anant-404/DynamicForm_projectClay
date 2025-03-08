"use client";

import { useState } from 'react';
import { FormField, FormSchema, FormData } from '@/lib/types';

interface DynamicFormProps {
  schema: FormSchema;
  onSubmit: (data: FormData) => void;
}

export function DynamicForm({ schema, onSubmit }: DynamicFormProps) {
  const [formData, setFormData] = useState<FormData>({});

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <div className="mb-4" key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              required={field.required}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        );

      case 'select':
        return (
          <div className="mb-4" key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <select
              id={field.id}
              value={formData[field.id] || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'checkbox':
        return (
          <div className="mb-4 flex items-center" key={field.id}>
            <input
              id={field.id}
              type="checkbox"
              checked={formData[field.id] || false}
              onChange={(e) => handleFieldChange(field.id, e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={field.id} className="ml-2 block text-sm text-gray-700">
              {field.label}
            </label>
          </div>
        );

      case 'section':
        return (
          <div key={field.id} className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{field.label}</h3>
            <div className="space-y-4">
              {field.fields?.map((nestedField) => renderField(nestedField))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {schema.fields.map((field) => renderField(field))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
}