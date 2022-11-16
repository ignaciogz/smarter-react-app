import { useEffect, useState, useRef } from 'react'

const useNearScreenLoad = () => {
  const elementRef = useRef(null);
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting }= entries[0];
        
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
  
    observer.observe(elementRef.current);
  }, [elementRef]);

  return [ elementRef, show ];
}

export default useNearScreenLoad;