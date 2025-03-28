import React, { useState } from 'react';
function DynamicForm() {
  // State to manage form fields (initially with one name and email field)
  const [fields, setFields] = useState([{ name: '', email: '' }]);

  // Handler to update the field value when user types
  const handleInputChange = (index, event) => {
    const updatedFields = [...fields];
    updatedFields[index][event.target.name] = event.target.value;
    setFields(updatedFields);
  };

  // Add a new set of fields to the form
  const handleAddField = () => {
    setFields([...fields, { name: '', email: '' }]);
  };

  // Remove a set of fields from the form
  const handleRemoveField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Submit the form data
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with values:', fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={field.name}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Enter your name"
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={field.email}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Enter your email"
              required
            />
          </label>
          <br />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add More Fields
      </button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
