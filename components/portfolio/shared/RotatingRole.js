"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function RotatingRole({ roles, interval = 2500 }) {
  const careerRoles = useMemo(
    () => (Array.isArray(roles) ? roles.filter(Boolean) : [roles].filter(Boolean)),
    [roles],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const swapTimeoutRef = useRef(null);

  useEffect(() => {
    if (careerRoles.length <= 1) {
      return undefined;
    }

    const rotation = window.setInterval(() => {
      setIsVisible(false);

      swapTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % careerRoles.length);
        setIsVisible(true);
      }, 260);
    }, interval);

    return () => {
      window.clearInterval(rotation);
      window.clearTimeout(swapTimeoutRef.current);
    };
  }, [careerRoles.length, interval]);

  return (
    <span
      className={[
        "inline-block min-w-[15ch] align-baseline text-slate-300 transition-all duration-300 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0",
      ].join(" ")}
    >
      {careerRoles[activeIndex] ?? ""}
    </span>
  );
}
