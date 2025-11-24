import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectAfterDelay = (path, delay) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path);  // Redirige a la ruta especificada después del retraso
    }, delay); // delay milisegundos

    return () => clearTimeout(timer);
  }, [navigate, path, delay]);
};

export { useRedirectAfterDelay };