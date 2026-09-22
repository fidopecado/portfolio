/**
 * Section anchors, in document order.
 *
 * `SectionId` is the single vocabulary for section ids. The header builds its
 * navigation from this list, `SectionHeading` derives each heading id from it,
 * and the page hands the same ids to its `<section>` elements — so labels,
 * hrefs, and heading ids can never drift apart.
 */

export const SECTIONS = {
  about: { index: "01", label: "About" },
  experience: { index: "02", label: "Experience" },
  work: { index: "03", label: "Work" },
  skills: { index: "04", label: "Skills" },
  education: { index: "05", label: "Education" },
} as const;

export type SectionId = keyof typeof SECTIONS;

/** Document-order navigation, derived from `SECTIONS` rather than hand-written. */
export const navigation = (Object.keys(SECTIONS) as SectionId[]).map((id) => ({
  id,
  label: SECTIONS[id].label,
  href: `#${id}`,
}));

/** Contact has no body section of its own, but it still needs an anchor id. */
export const CONTACT_INDEX = "06";
