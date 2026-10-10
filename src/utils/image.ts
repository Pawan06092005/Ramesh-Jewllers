// Rewrites the `w=` query param of an Unsplash URL so we can serve responsive sizes.
export function withWidth(url: string, width: number) {
  return /[?&]w=\d+/.test(url) ? url.replace(/([?&])w=\d+/, `$1w=${width}`) : url;
}
