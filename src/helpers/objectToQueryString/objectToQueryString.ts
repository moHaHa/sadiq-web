export function objectToQueryString(
  obj: Record<string, any> | undefined
): string {
  if (typeof obj != "object") return "";
  let params = new URLSearchParams();
  for (let prop in obj) {
    const v = obj[prop];
    if (Array.isArray(v)) {
      v.forEach((value) => {
        if (value) {
          params.append(prop, value);
        }
      });
    } else {
      //  null is accepted as value
      if (v !== undefined && String(v).trim()) {
        params.append(prop, v);
      }
    }
  }
  return params.toString();
}
