'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { qualifierQuestions } from '@/lib/constants/qualifier';
import { siteConfig } from '@/lib/constants/config';
import type { QualifierFormData } from '@/types';

interface QualifierFormProps {
  onClose: () => void;
}

export function QualifierForm({ onClose }: QualifierFormProps) {
  const [formData, setFormData] = useState<QualifierFormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, boolean> = {};
    qualifierQuestions.forEach((q) => {
      if (q.required && !formData[q.id]?.trim()) {
        newErrors[q.id] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build mailto body
    const body = qualifierQuestions
      .map((q) => `${q.label}\n${formData[q.id] || 'Not answered'}`)
      .join('\n\n');

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      'Conversation Qualifier — Next Sketch'
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="font-heading text-xl font-semibold text-neutral-50">
          We&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-body text-neutral-300">
          Your email client should have opened with your responses.
          Send the email and we&apos;ll review it within 24 hours.
        </p>
        <Button variant="secondary" className="mt-6" onClick={onClose}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {qualifierQuestions.map((question) => (
        <div key={question.id}>
          <label
            htmlFor={question.id}
            className="mb-2 block text-body font-medium text-neutral-50"
          >
            {question.label}
            {question.required && (
              <span className="ml-1 text-brand-primary">*</span>
            )}
          </label>
          {question.type === 'select' && question.options ? (
            <select
              id={question.id}
              value={formData[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className={`w-full rounded-lg border bg-brand-dark px-4 py-3 text-body text-neutral-200 transition-colors focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                errors[question.id]
                  ? 'border-red-500'
                  : 'border-neutral-700'
              }`}
            >
              <option value="">Select an option</option>
              {question.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <textarea
              id={question.id}
              value={formData[question.id] || ''}
              onChange={(e) => handleChange(question.id, e.target.value)}
              placeholder={question.placeholder}
              rows={3}
              className={`w-full resize-none rounded-lg border bg-brand-dark px-4 py-3 text-body text-neutral-200 transition-colors placeholder:text-neutral-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary ${
                errors[question.id]
                  ? 'border-red-500'
                  : 'border-neutral-700'
              }`}
            />
          )}
          {errors[question.id] && (
            <p className="mt-1 text-body-sm text-red-400">
              This field is required.
            </p>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
        <Button variant="text" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Submit Qualifier</Button>
      </div>
    </form>
  );
}
