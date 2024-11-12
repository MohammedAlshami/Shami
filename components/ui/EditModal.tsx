import React, { useState } from "react";

// Define a generic interface for form fields
interface FormField {
  name: string; // Field name, used for value binding
  label: string; // Label for the input field
  type: string; // Input type (e.g., text, url, etc.)
  value?: string; // Optional default value
  required?: boolean; // Is this field required?
}

interface ModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void; // Submit function with the dynamic form data
  fields: FormField[]; // Array of form fields
  initialData?: T; // Optional initial data for the form
}

const DynamicModal = <T extends object>({
  isOpen,
  onClose,
  onSubmit,
  fields,
  initialData,
}: ModalProps<T>) => {
  // Create a state object to hold dynamic form data
  const [formData, setFormData] = useState<T>(
    initialData || ({} as T) // Use initial data if provided, otherwise an empty object
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Pass the dynamic form data back
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Don't render anything if modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
      <div className="bg-neutral-950 p-6 rounded-lg shadow-lg w-6/12 border border-4 border-black/40">
        <h3 className="text-xl mb-4">Add New Entry</h3>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof T] || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 bg-neutral-800"
                required={field.required}
              />
            </div>
          ))}
          <button
            type="submit"
            className="text-white bg-neutral-800/40 px-4 py-2 rounded hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 text-white bg-neutral-800/40 px-4 py-2 rounded hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default DynamicModal;
