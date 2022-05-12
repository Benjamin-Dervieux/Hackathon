import { useState } from 'react';

const PointModale = () => {
  const [revele, setRevele] = useState(false);

  function toggle() {
    setRevele(!revele);
  }
  return {
    revele,
    toggle,
  };
};

export default PointModale;
