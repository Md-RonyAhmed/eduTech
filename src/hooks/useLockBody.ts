import { useLayoutEffect } from "react";

export function useLockBody() {
  useLayoutEffect(() => {
    // Store original style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Apply lock
    document.body.style.overflow = "hidden";

    // Cleanup function
    return () => {
      // Restore original style
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty dependency array
}
