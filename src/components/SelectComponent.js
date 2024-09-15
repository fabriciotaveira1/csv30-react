// src/components/SelectComponent.js
import React, { useState } from 'react';

function SelectComponent({ options, label, value, onChange }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <label htmlFor="select" className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      <select
        id="select"
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
