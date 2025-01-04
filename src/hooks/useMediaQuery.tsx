import { useState, useEffect } from "react";

const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    // Listen for changes
    media.addEventListener("change", listener);

    // Cleanup listener on unmount
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;
