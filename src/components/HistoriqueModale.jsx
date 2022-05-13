import { useState } from 'react';

function HistoriqueModale() {
  const [revele, setModaleReveal] = useState(false);

  function toggle() {
    setModaleReveal(!revele);
  }

  return {
    revele,
    toggle,
  };
}

export default HistoriqueModale;
