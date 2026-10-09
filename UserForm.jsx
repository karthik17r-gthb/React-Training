import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  city: "",
};

function UserForm({ selectedUser, onSubmit, onCancel, submitting }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.name || "",
        username: selectedUser.username || "",
        email: selectedUser.email || "",
        phone: selectedUser.phone || "",
        website: selectedUser.website || "",
        city: selectedUser.address?.city || "",
      });
    } else {
      setFormData(emptyForm);
    }

    setErrors({});
  }, [selectedUser]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function validate() {
    const newErrors = {};

    ["name", "username", "email"].forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email.trim() && !emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validate()) return;

    const userData = {
      ...formData,
      address: {
        ...(selectedUser?.address || {}),
        city: formData.city.trim(),
      },
    };

    delete userData.city;

    await onSubmit(userData);
  }

  return (
    <section className="form-card">
      <div className="form-heading">
        <div>
          <h2>{selectedUser ? "Edit User" : "Add New User"}</h2>
          <p>
            {selectedUser
              ? "Update the selected user's information."
              : "Enter the details to create a user."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          {[
            { name: "name", label: "Full Name", required: true },
            { name: "username", label: "Username", required: true },
            { name: "email", label: "Email Address", required: true },
            { name: "phone", label: "Phone" },
            { name: "website", label: "Website" },
            { name: "city", label: "City" },
          ].map((field) => (
            <div className="form-group" key={field.name}>
              <label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="required"> *</span>}
              </label>

              <input
                id={field.name}
                name={field.name}
                type={field.name === "email" ? "email" : "text"}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={
                  errors[field.name] ? `${field.name}-error` : undefined
                }
                required={field.required}
              />

              {errors[field.name] && (
                <small className="field-error" id={`${field.name}-error`}>
                  {errors[field.name]}
                </small>
              )}
            </div>
          ))}
        </div>

        <div className="form-actions">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Saving..."
              : selectedUser
                ? "Update User"
                : "Add User"}
          </button>

          {selectedUser && (
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onCancel}
              disabled={submitting}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default UserForm;