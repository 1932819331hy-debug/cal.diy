// Mirrors cal.diy#30348: the OAuth scope parser splits only on commas, so a standard
// space-separated scope string collapses into one invalid token. Split on comma OR whitespace.
export function parseScopes(scope) {
  return scope.split(",").map((s) => s.trim()).filter(Boolean);
}
