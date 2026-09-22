import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal icon runtime for this site.
 *
 * Every icon is a 24x24 stroke drawing made of plain SVG child nodes, so the
 * whole set ships as a handful of path strings and renders as a server
 * component by default. No icon library is imported on the client, and each
 * icon in `@/components/icons` stays individually tree-shakeable.
 *
 * The visual defaults (1.5px stroke, round caps, 4px corners) are intentional:
 * they sit closer to the thin, drawn look of the e-ink palette than the
 * heavier 2px defaults most libraries ship with.
 */

export type IconNode = readonly [tag: string, attrs: Record<string, string | number>];

export type IconProps = React.ComponentProps<"svg"> & {
  children?: React.ReactNode;
};

export function createIcon(name: string, children: readonly IconNode[]) {
  function Icon({ className, children: custom, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        data-icon={name}
        className={cn("size-4 shrink-0", className)}
        {...props}
      >
        {children.map(([tag, attrs], index) =>
          React.createElement(tag, { key: index, ...attrs }),
        )}
        {custom}
      </svg>
    );
  }

  Icon.displayName = `${name}Icon`;

  return Icon;
}
