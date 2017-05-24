import React from 'react';

export const RenderInput = field =>
    <div>
      <input className="post-input" {...field.input} type={field.type} />
      {field.meta.touched &&
      field.meta.error &&
      <div className="error">{field.meta.error}</div>}
    </div>;