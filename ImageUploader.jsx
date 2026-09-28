import React, { useState, useRef } from 'react';

export default function ImageUploader() {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

 
  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else if (file) {
      alert('Please select a valid image file.');
    }
  };


  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset input element
    }
  };

  return (
    <div className="uploader-card">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }} // Hidden native input
      />

      <div className="preview-container">
        {imagePreview ? (
          <img src={imagePreview} alt="Profile Preview" className="image-preview" />
        ) : (
          <div className="preview-placeholder">
            <span>No Image Selected</span>
          </div>
        )}
      </div>

      <div className="uploader-actions">
        <button type="button" className="btn btn-primary" onClick={handleCustomButtonClick}>
          {imagePreview ? 'Change Image' : 'Upload Image'}
        </button>
        
        {imagePreview && (
          <button type="button" className="btn btn-danger" onClick={handleRemoveImage}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
