import React from 'react';

export const RenderTextArea = field =>
    <div>
      <textarea className="post-content-input" {...field.input} rows={field.rows} />
      {field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>}
    </div>;