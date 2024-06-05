// Numpy.js
import React from 'react';

const Numpy = () => {
  // Creating a JavaScript array
  const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  return (
    <div>
      <h2>NumPy Example</h2>
      <p>Sample NumPy Array:</p>
      <pre>{JSON.stringify(arr)}</pre> {/* Displaying the NumPy array */}
    </div>
  );
};
export default Numpy;