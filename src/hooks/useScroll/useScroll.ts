export const scrollIdPrefix = 'scroll-id-';
export const useScroll = (htmlId: string | undefined) => {
	if (htmlId != undefined) {
		const targetElement = document.getElementById(scrollIdPrefix + htmlId);
		if (targetElement != null) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		} else {
		}
	}
};
