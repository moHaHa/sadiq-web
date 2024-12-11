export function objectToQueryString(obj: Record<string, any>): string {
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
			if (v) {
				params.append(prop, v);
			}
		}
	}
	return params.toString();
}
