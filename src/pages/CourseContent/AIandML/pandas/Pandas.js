// Pandas.js
import React from 'react';
import { DataFrame } from 'pandas'; // Importing DataFrame from Pandas

const Pandas = () => {
  // Creating a sample DataFrame
  const data = {
    Name: ['Alice', 'Bob', 'Charlie'],
    Age: [25, 30, 35],
  };
  const df = new DataFrame(data);

  return (
    <div>
      <h2>Pandas Example</h2>
      <p>Sample DataFrame:</p>
      <pre>{df.toString()}</pre> {/* Displaying the DataFrame */}
    </div>
  );
};

export default Pandas;