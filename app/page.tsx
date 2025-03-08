"use client";

import { useState } from 'react';
import { DynamicForm } from '@/components/DynamicForm';
import { FormSchema, FormData } from '@/lib/types';
import formSchema from './schema.json';

export default function Home() {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSubmit = (data: FormData) => {
    setSubmittedData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">{formSchema.title}</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 text-black">
          <DynamicForm schema={formSchema as FormSchema} onSubmit={handleSubmit} />
        </div>

        {submittedData && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Submitted Data</h2>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}