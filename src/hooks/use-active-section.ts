"use client";

import { useEffect, useState } from "react";
import { navigation, type SectionId } from "@/data/sections";

/**
 * Tracks which section is currently in view.
 *
 * Uses a single `IntersectionObserver` over every section in `navigation`
 * instead of a scroll listener, so it stays off the main thread. The root
 * margin biases the detection zone toward the top band of the viewport, which
 * matches where the sticky header sits and avoids flicker between short
 * sections.
 */
export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const elements = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        // Keep document order rather than observer callback order.
        const next = navigation.find(({ id }) => visible.has(id));
        setActive((next?.id ?? null) as SectionId | null);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return active;
}
