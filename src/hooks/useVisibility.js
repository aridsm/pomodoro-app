import { useEffect, useRef, useState } from 'react'

const useVisibility = () => {
  const [isShown, setIsShown] = useState(false)
  const menuRef = useRef();

  useEffect(() => {

    function checkVisibility(e) {
      if (e.target !== menuRef.current && !menuRef.current.contains(e.target)) {
        setIsShown(false)
      }
    }

    document.addEventListener('click', checkVisibility)
    return () => {
      document.removeEventListener('click', checkVisibility)
    }
  }, [])
  return { isShown, setIsShown, menuRef }
}

export default useVisibility