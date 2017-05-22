import React from 'react';

export const RenderInput = field =>
    <div>
      <input {...field.input} type={field.type} />
      {field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>}
    </div>;