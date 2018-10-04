import * as React from 'react';
import spinner from '../../assets/spinner.gif';

export default () => {
  return (
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  );
};
