import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = () => {
  return (
    <div>
      <PropagateLoader
        color={'rgb(205, 92, 92)'}
        size={15}
        speedMultiplier={0.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
