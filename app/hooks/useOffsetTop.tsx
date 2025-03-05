import { useState, useEffect, useRef, type RefObject } from "react";

// Custom hook to calculate the distance from the document top
export default function useOffsetTop<T extends HTMLElement>(): [
  RefObject<T | null>,
  number
] {
  const ref = useRef<T>(null);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  const updateOffset = () => {
    if (ref.current) {
      // getBoundingClientRect().top returns the distance from the viewport top,
      // so adding window.scrollY gives the distance from the document top.
      setOffsetTop(ref.current.getBoundingClientRect().top + window.scrollY);
    }
  };

  useEffect(() => {
    updateOffset();
    window.addEventListener("scroll", updateOffset);
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return [ref, offsetTop];
}
