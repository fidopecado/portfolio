import { createIcon, type IconNode } from "./create-icon";

type IconName =
  | "arrow-down-right"
  | "arrow-up-right"
  | "check"
  | "chevron-right"
  | "circle-dot"
  | "download"
  | "external-link"
  | "mail"
  | "map-pin"
  | "menu"
  | "phone"
  | "terminal"
  | "x";

/** Hand-drawn paths, kept close to 24x24 on a shared 1.5px stroke grid. */
const paths: Record<IconName, readonly IconNode[]> = {
  "arrow-down-right": [["path", { d: "M7 7 17 17" }], ["path", { d: "M17 8v9H8" }]],
  "arrow-up-right": [["path", { d: "M7 17 17 7" }], ["path", { d: "M8 7h9v9" }]],
  check: [["path", { d: "m5 12.5 4.2 4.2L19 6.5" }]],
  "chevron-right": [["path", { d: "m9.5 5.5 6.5 6.5-6.5 6.5" }]],
  "circle-dot": [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 12, cy: 12, r: 3, fill: "currentColor", stroke: "none" }],
  ],
  download: [
    ["path", { d: "M12 3.5v11" }],
    ["path", { d: "m7.5 10.5 4.5 4.5 4.5-4.5" }],
    ["path", { d: "M4.5 19.5h15" }],
  ],
  "external-link": [
    ["path", { d: "M14 4h6v6" }],
    ["path", { d: "M10.5 13.5 20 4" }],
    ["path", { d: "M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H9" }],
  ],
  mail: [
    ["rect", { x: 2.75, y: 4.75, width: 18.5, height: 14.5, rx: 1.5 }],
    ["path", { d: "m3.5 6.5 8.5 6 8.5-6" }],
  ],
  "map-pin": [
    ["path", { d: "M20 10.5c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z" }],
    ["circle", { cx: 12, cy: 10.5, r: 2.75 }],
  ],
  menu: [["path", { d: "M4 7.5h16" }], ["path", { d: "M4 12h16" }], ["path", { d: "M4 16.5h16" }]],
  phone: [
    [
      "path",
      {
        d: "M6.2 3.5A1.5 1.5 0 0 1 8 4.7l.9 2.4-1.7 1.4a11.6 11.6 0 0 0 5.3 5.3l1.4-1.7 2.4.9a1.5 1.5 0 0 1 1.2 1.8l-.5 2.4a1.5 1.5 0 0 1-1.7 1.3A16 16 0 0 1 4 8.1a1.5 1.5 0 0 1 1.3-1.7Z",
      },
    ],
  ],
  terminal: [["path", { d: "m5 7 4.5 5L5 17" }], ["path", { d: "M12.5 17h6.5" }]],
  x: [["path", { d: "m6 6 12 12" }], ["path", { d: "m18 6-12 12" }]],
};

/**
 * `satisfies` keeps the record exhaustive without flattening the literal
 * types, so the exported icon components stay strongly typed.
 */
const definitions = paths satisfies Record<string, readonly IconNode[]>;

export const ArrowDownRightIcon = createIcon("arrow-down-right", definitions["arrow-down-right"]);
export const ArrowUpRightIcon = createIcon("arrow-up-right", definitions["arrow-up-right"]);
export const CheckIcon = createIcon("check", definitions.check);
export const ChevronRightIcon = createIcon("chevron-right", definitions["chevron-right"]);
export const CircleDotIcon = createIcon("circle-dot", definitions["circle-dot"]);
export const DownloadIcon = createIcon("download", definitions.download);
export const ExternalLinkIcon = createIcon("external-link", definitions["external-link"]);
export const MailIcon = createIcon("mail", definitions.mail);
export const MapPinIcon = createIcon("map-pin", definitions["map-pin"]);
export const MenuIcon = createIcon("menu", definitions.menu);
export const PhoneIcon = createIcon("phone", definitions.phone);
export const TerminalIcon = createIcon("terminal", definitions.terminal);
export const XIcon = createIcon("x", definitions.x);

export { createIcon };
export type { IconNode };
