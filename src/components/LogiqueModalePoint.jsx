import { useState } from 'react';

const ModalePoint = () => {
  const [revele, changeRevele] = useState(false);

  function toggle() {
    changeRevele(!revele);
  }
  return {
    revele,
    toggle,
  };
};
export default ModalePoint;
