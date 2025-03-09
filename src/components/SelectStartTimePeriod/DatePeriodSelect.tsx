/**
 * ⚠️ IMPORTANT NOTICE ⚠️
 *
 * This file requires careful review and improvement.
 *
 * - Before making updates, please ensure you understand the current functionality.
 * - Consult with the original author if possible.
 * - Review related documentation and dependencies.
 *
 * Failure to properly review changes may lead to critical issues.
 *
 * Author: [Mohammad_Al_Hallaq]
 * Last Reviewed: [23 Jun 2024]
 *
 */

import { CalendarOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Divider, Row, Select } from 'antd';
import { SelectProps } from 'antd/lib';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { FC, useEffect, useState } from 'react';
import { commonDays, getPeriodKey, PeriodKey } from '~/utils/commonDays';
dayjs.extend(isoWeek);

const { RangePicker } = DatePicker;
type RangeValue = Parameters<NonNullable<React.ComponentProps<typeof DatePicker.RangePicker>['onChange']>>[0];

export type DatePeriodRange = { start: string; end: string };
interface DatePeriodSelect extends Omit<SelectProps, 'value' | 'onChange'> {
	value?: DatePeriodRange | undefined;
	onChange?: (value: { start: string; end: string } | undefined) => void;
	setPeriod?: (period: PeriodKey) => void;
	period?: PeriodKey;
	onlyMonth?: boolean;
	onlyYear?: boolean;
	showYearOption?: boolean;
	disabledDateProp?: (current: Dayjs) => boolean;
	nextDates?: boolean;
	small?: boolean;
}
const DatePeriodSelect: FC<DatePeriodSelect> = ({
	onChange,
	value,
	setPeriod,
	period,
	onlyMonth,
	onlyYear,
	showYearOption = true,
	disabledDateProp,
	nextDates,
	small,
	...rest
}) => {
	const {
		thisDay,
		yesterday,
		thisWeek,
		lastWeek,
		thisMonth,
		last30Day,
		lastMonth,
		thisYear,
		lastYear,
		nextMonth,
		nextThreeMonth,
		nextWeek,
	} = commonDays();
	const [stagePeriodKey, setStagePeriodKey] = useState<PeriodKey | 'Custom Period' | undefined>(() => {
		const key = getPeriodKey(value?.start, value?.end);
		if (key) {
			return key;
		} else if ((value?.start, value?.end)) {
			return 'Custom Period';
		} else {
			return undefined;
		}
	});
	const handleChange = (periodKey: PeriodKey | 'Custom Period') => {
		if (periodKey == 'Custom Period') {
			setOpenCustom(true);
			return;
		}

		switch (periodKey) {
			case 'thisDay':
				onChange?.({
					start: thisDay.start,
					end: thisDay.end,
				});
				break;
			case 'yesterday':
				onChange?.({
					start: yesterday.start,
					end: yesterday.end,
				});
				break;
			case 'thisWeek':
				onChange?.({
					start: thisWeek.start,
					end: thisWeek.end,
				});
				break;
			case 'lastWeek':
				onChange?.({
					start: lastWeek.start,
					end: lastWeek.end,
				});
				break;
			case 'thisMonth':
				onChange?.({
					start: thisMonth.start,
					end: thisMonth.end,
				});
				break;
			case 'last30Day':
				onChange?.({
					start: last30Day.start,
					end: last30Day.end,
				});
				break;
			case 'lastMonth':
				onChange?.({
					start: lastMonth.start,
					end: lastMonth.end,
				});
				break;
			case 'thisYear':
				onChange?.({
					start: thisYear.start,
					end: thisYear.end,
				});
				break;

			case 'lastYear':
				onChange?.({
					start: lastYear.start,
					end: lastYear.end,
				});
				break;
			case 'nextWeek':
				onChange?.({
					start: nextWeek.start,
					end: nextWeek.end,
				});
				break;
			case 'nextMonth':
				onChange?.({
					start: nextMonth.start,
					end: nextMonth.end,
				});
				break;
			case 'nextThreeMonth':
				onChange?.({
					start: nextThreeMonth.start,
					end: nextThreeMonth.end,
				});
				break;
			default:
				setStagePeriodKey(undefined);
				onChange?.(undefined);
				break;
		}
	};

	const [range, setRange] = useState<RangeValue>();
	/**
	 *
	 */
	const [dates, setDates] = useState<RangeValue>();
	const [openCustom, setOpenCustom] = useState(false);
	const disabledDate = (current: Dayjs) => {
		if (typeof disabledDateProp != 'undefined') {
			return disabledDateProp(current);
		}
		if (!dates) {
			return false;
		}
		if (onlyMonth) {
			const tooLate = dates[0] && current.diff(dates[0], 'days') >= 31;
			const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 31;
			return !!tooEarly || !!tooLate;
		} else if (onlyYear) {
			const tooLate = dates[0] && current.diff(dates[0], 'days') >= 365;
			const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 365;
			return !!tooEarly || !!tooLate;
		} else {
			return false;
		}
	};

	useEffect(() => {
		if (value != undefined) {
			const periodKey = getPeriodKey(value.start, value.end);
			if (periodKey != undefined) {
				setStagePeriodKey(periodKey);
			} else {
				setStagePeriodKey('Custom Period');
			}
		} else {
			setRange(undefined);
		}
	}, [value]);

	const validCustomRange = stagePeriodKey == 'Custom Period' && dayjs(value?.start).isValid() && dayjs(value?.end).isValid();

	const renderCustomPeriodTitle = validCustomRange
		? (() => {
				const start = dayjs(value?.start);
				const end = dayjs(value?.end);
				if (start.isSame(end, 'year')) {
					return dayjs(value?.start).format('D MMMM') + ' ' + '  →  ' + ' ' + dayjs(value?.end).format(' D  MMMM');
				}
				return (
					dayjs(value?.start).format('D MMMM YYYY') + ' ' + '  →  ' + ' ' + dayjs(value?.end).format(' D  MMMM YYYY')
				);
		  })()
		: undefined;
	return (
		<>
			<Select<PeriodKey | 'Custom Period'>
				suffixIcon={<CalendarOutlined></CalendarOutlined>}
				popupMatchSelectWidth={false}
				style={{ width: '100%' }}
				value={stagePeriodKey}
				labelInValue={false}
				placeholder={'الفترة الزمنية'}
				{...rest}
				onChange={handleChange}
				open={openCustom || undefined}
				dropdownRender={(menu) => (
					<>
						{menu}

						<Divider style={{ margin: '8px 0' }} />

						<Button onClick={() => handleChange('Custom Period')} type='text'>
							Custom Period
						</Button>

						{(validCustomRange || openCustom) && (
							<>
								<Row gutter={[12, 12]} style={{ marginTop: '4px' }}>
									<Col span={24}>
										<RangePicker
											size={small ? 'small' : undefined}
											format={'D MMMM YYYY'}
											value={range}
											onClick={(e) => {
												setOpenCustom(true);
												e.stopPropagation();
											}}
											disabledDate={disabledDate}
											style={{ width: '100%' }}
											onChange={(e) => setRange(e)}
											onCalendarChange={(val) => {
												setDates(val);
											}}
										/>
									</Col>
									<Col span={12}>
										<Button
											onClick={() => {
												setOpenCustom(false);
												onChange?.(undefined);
											}}
											block
										>
											Cancel
										</Button>
									</Col>
									<Col span={12}>
										<Button
											onClick={() => {
												dates &&
													dates.length > 0 &&
													dates[0] &&
													dates[1] &&
													onChange?.({
														start: dates[0].startOf('day').toISOString(),
														end: dates[1].endOf('day').toISOString(),
													});

												setOpenCustom(false);
											}}
											disabled={
												range?.[0]?.clone().toISOString() == undefined ||
												range?.[1]?.clone().toISOString() == undefined
											}
											type='primary'
											block
										>
											Set
										</Button>
									</Col>
								</Row>
							</>
						)}
					</>
				)}
				labelRender={(e) => renderCustomPeriodTitle ?? e.label}
			>
				{[
					{ value: 'thisDay', label: 'اليوم' },
					{ value: 'yesterday', label: 'البارحة' },
					{ value: 'thisWeek', label: 'هذا الاسبوع' },
					{ value: 'lastWeek', label: 'الاسبوع الماضي' },
					{ value: 'thisMonth', label: 'هذا الشهر' },
					{ value: 'last30Day', label: 'آخر ٣٠ يوم' },
					{ value: 'lastMonth', label: 'الشهر الماضي' },
					...(nextDates
						? [
								{ value: 'nextWeek', label: 'Next Week' },
								{ value: 'nextMonth', label: 'Next Month' },
								{ value: 'nextThreeMonth', label: 'Next 3 Month' },
						  ]
						: []),
					...(showYearOption
						? [
								{ value: 'thisYear', label: 'هذه السنة' },
								{ value: 'lastYear', label: 'السنة الماضية' },
						  ]
						: []),
					{ value: 'Custom Period', label: 'Custom Period' },
				].map((e) => (e.value == 'Custom Period' ? <></> : <Select.Option key={e.value}>{e.label}</Select.Option>))}
			</Select>
		</>
	);
};
export default DatePeriodSelect;
