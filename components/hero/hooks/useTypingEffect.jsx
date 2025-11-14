// /components/hero/hooks/useTypingEffect.js
import { useEffect, useRef, useState } from "react";

/**
 * Types text by slicing the original string, which avoids
 * batching/race issues and StrictMode double-invoke problems.
 * - No flashing of full text
 * - No skipped 1st or 2nd char
 * - Cancels timers cleanly on unmount or prop change
 */
export default function useTypingEffect(fullText = "", speed = 25, delay = 300) {
  const [displayed, setDisplayed] = useState("");
  const timersRef = useRef([]);        // track all timeouts
  const indexRef = useRef(0);          // current index

  // clear all timeouts safely
  const clearAll = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    clearAll();
    setDisplayed("");

    if (!fullText) return;

    indexRef.current = 0;

    const tick = () => {
      // slice avoids skipped-char issues from batched updates
      const nextIndex = indexRef.current + 1;
      setDisplayed(fullText.slice(0, nextIndex));
      indexRef.current = nextIndex;

      if (indexRef.current < fullText.length) {
        const t = setTimeout(tick, speed);
        timersRef.current.push(t);
      }
    };

    // initial “thinking” delay before the first character
    const starter = setTimeout(tick, delay);
    timersRef.current.push(starter);

    // cleanup for unmount / prop change / StrictMode re-run
    return clearAll;
  }, [fullText, speed, delay]);

  return displayed;
}
