import React, { useState } from 'react';

function Btn({ btnLabel }) {
  const [label, setLabel] = useState(btnLabel);

  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}

export default Btn;
