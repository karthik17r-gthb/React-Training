import React, { useState } from 'react';

const UserForm = () => {
  // Initial structural state layout tracking all 8 fields
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    city: '',
    address: '',
    password: '',
  };

  // State initialization hooks
  const [formData, setFormData] = useState(initialFormState);
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  // Controlled component input change tracker
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Instantly wipe validation errors for this active field while typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Basic verification check for mandatory form fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Prevent default handling and process submitted values
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      setSubmittedData({ ...formData });
    }
  };

  // Wipe form states back to initial baseline
  const handleReset = () => {
    setFormData(initialFormState);
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Registration Form</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Row 1: Name & Email */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ ...styles.input, ...(errors.name ? styles.inputError : {}) }}
                placeholder="John Doe"
              />
              {errors.name && <span style={styles.errorText}>{errors.name}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ ...styles.input, ...(errors.email ? styles.inputError : {}) }}
                placeholder="john@example.com"
              />
              {errors.email && <span style={styles.errorText}>{errors.email}</span>}
            </div>
          </div>

          {/* Row 2: Phone & Age */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ ...styles.input, ...(errors.phone ? styles.inputError : {}) }}
                placeholder="123-456-7890"
              />
              {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                style={styles.input}
                placeholder="25"
                min="0"
              />
            </div>
          </div>

          {/* Row 3: Gender & City */}
          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                style={styles.input}
                placeholder="New York"
              />
            </div>
          </div>

          {/* Full Width Row: Address */}
          <div style={styles.formGroupFull}>
            <label style={styles.label}>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="123 Street Ave..."
              rows="2"
            />
          </div>

          {/* Full Width Row: Password */}
          <div style={styles.formGroupFull}>
            <label style={styles.label}>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ ...styles.input, ...(errors.password ? styles.inputError : {}) }}
              placeholder="••••••••"
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          {/* Real-time state layout preview text anchor */}
          <div style={styles.livePreview}>
            <strong>Live State Preview:</strong> {formData.name || '...'} | {formData.email || '...'}
          </div>

          {/* Interactive Form Buttons */}
          <div style={styles.buttonGroup}>
            <button type="button" onClick={handleReset} style={styles.resetBtn}>
              Reset
            </button>
            <button type="submit" style={styles.submitBtn}>
              Submit Data
            </button>
          </div>
        </form>
      </div>

      {/* Conditional Layout Rendering Display Container Card */}
      {submittedData && (
        <div style={styles.resultCard}>
          <h3 style={styles.resultTitle}>🎉 Form Submitted Successfully!</h3>
          <div style={styles.resultGrid}>
            <div><strong>Name:</strong> {submittedData.name}</div>
            <div><strong>Email:</strong> {submittedData.email}</div>
            <div><strong>Phone:</strong> {submittedData.phone}</div>
            <div><strong>Age:</strong> {submittedData.age || 'N/A'}</div>
            <div><strong>Gender:</strong> {submittedData.gender || 'N/A'}</div>
            <div><strong>City:</strong> {submittedData.city || 'N/A'}</div>
            <div style={{ gridColumn: 'span 2' }}><strong>Address:</strong> {submittedData.address || 'N/A'}</div>
            <div style={{ gridColumn: 'span 2' }}><strong>Password:</strong> <span style={{ fontFamily: 'monospace' }}>•••••••• (Secured)</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: 'hsl(0, 6%, 79%)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    width: '100%',
    maxWidth: '650px',
    boxSizing: 'border-box',
  },
  title: {
    margin: '0 0 24px 0',
    fontSize: '24px',
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  row: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  formGroup: {
    flex: '1 1 calc(50% - 8px)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '250px',
  },
  formGroupFull: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: 'black',
    marginBottom: '6px',
  },
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  select: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    backgroundColor: '#fff',
    fontSize: '15px',
    outline: 'none',
  },
  textarea: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '15px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  inputError: {
    borderColor: '#ef4444',
    backgroundColor: '#fef2f2',
  },
  errorText: {
    color: '#ef4444',
    fontSize: '12px',
    marginTop: '4px',
  },
  livePreview: {
    fontSize: '12px',
    color: '#6b7280',
    backgroundColor: '#f9fafb',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px dashed #e5e7eb',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '10px',
  },
  submitBtn: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '11px 24px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    cursor: 'pointer',
    fontSize: '15px',
  },
  resetBtn: {
    backgroundColor: '#e63213',
    color: 'black',
    padding: '11px 24px',
    border: '5px solid #d1d5db',
  },
};

export default UserForm;
