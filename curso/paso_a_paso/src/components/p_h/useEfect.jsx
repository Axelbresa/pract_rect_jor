import React, { useEffect, useState } from 'react';

function EfectScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("fase de montaje");

    

    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };

    // Aquí debes agregar un event listener para detectar el scroll
    window.addEventListener('scroll', detectarScroll);

    // La función retornada en useEffect es usada para limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', detectarScroll);
    };
  }, []); // El segundo argumento [] indica que useEffect solo se ejecutará en el montaje y desmontaje

  return (
    <div>
      <h2>useEffect y el ciclo de vida</h2>
      <p>scroll del navegador {scrollY}px</p>
    </div>
  );
}

export default EfectScroll;
