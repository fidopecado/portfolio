/**
 * Canonical external destinations.
 *
 * Everything that leaves the site — the portfolio's own URL, social profiles,
 * and project demos — is declared here so a rename or a domain move is a
 * one-line change instead of a grep.
 */

/** Absolute site origin used for Open Graph and canonical URLs. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

import { contact } from "./profile";

/**
 * Profile links. An entry with an empty `href` is never rendered, so a
 * half-configured profile can never ship a dead link.
 */
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/fidopecado" },
  { label: "WhatsApp", href: contact.whatsapp },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/firdaus-ravi-faizzani-999781228/",
  },
].filter((link) => link.href.length > 0);

/** CYMonitor: firmware repo and the GitHub Pages build of `web/`. */
export const cyMonitor = {
  repo: "https://github.com/fidopecado/CYMonitor",
  site: "https://fidopecado.github.io/CYMonitor/",
  app: "https://fidopecado.github.io/CYMonitor/app.html",
  /** `?demo=1` starts the generated-telemetry demo instead of the setup form. */
  demo: "https://fidopecado.github.io/CYMonitor/app.html?demo=1",
} as const;

/**
 * r/indonesia analytics dashboard, hosted on Streamlit Community Cloud.
 *
 * `?embed=true` puts the app in iframe mode: Streamlit Cloud otherwise serves
 * its own chrome around the app and refuses to be framed.
 */
export const rIndonesia = {
  repo: "https://github.com/fidopecado/Indonesian-Subreddit-Analytics",
  app: "https://fidopecado-indonesian-subreddit-analytics-app-jsnenm.streamlit.app/",
  embed:
    "https://fidopecado-indonesian-subreddit-analytics-app-jsnenm.streamlit.app/?embed=true",
} as const;
