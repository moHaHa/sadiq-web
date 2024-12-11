import dayjs from 'dayjs';
import { formats } from './formats';

const toDate = (v?: string | null) => {
	const dateValue = dayjs(v);
	return v && dateValue.isValid() ? dateValue.format(formats.dateOnly) : null;
};

const toDateWithTime = (v?: string | null) => {
	const dateValue = dayjs(v);
	return v && dateValue.isValid() ? dateValue.format(formats.date) : null;
};

const toTime = (v?: string | null) => {
	const dateValue = dayjs(v);
	return v && dateValue.isValid() ? dateValue.format(formats.time) : null;
};
export const getFormat = {
	toDate,
	toDateWithTime,
	toTime,
};
