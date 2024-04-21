import { useEffect, useRef, useState } from "react";

export function useMediaQuery(query: string) {
  const mediaQuery = useRef<MediaQueryList | null>(null);

  const [doesMatch, setDoesMatch] = useState<boolean | null>(
    mediaQuery.current ? mediaQuery.current.matches : null,
  );

  const handleMqChange = () => {
    setDoesMatch(mediaQuery.current ? mediaQuery.current.matches : false);
  };

  useEffect(() => {
    mediaQuery.current = window.matchMedia(query);
    mediaQuery.current.addEventListener("change", handleMqChange);
    setDoesMatch(mediaQuery.current.matches);

    return () => {
      if (mediaQuery.current)
        mediaQuery.current.removeEventListener("change", handleMqChange);
    };
  }, []);

  return doesMatch;
}
