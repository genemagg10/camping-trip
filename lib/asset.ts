/** Prefix public files for GitHub Pages (`/camping-trip`). Empty in local dev. */
export function asset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
