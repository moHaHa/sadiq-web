import { Select, SelectProps } from 'antd';
import { FC, useMemo, useState } from 'react';
import { useDebounce } from '~/hooks/useDebounce/useDebounce';
import { TZoneItem } from '~/server/zone/types';
import { useZonesQuery } from '~/server/zone/useZonesQuery/useZonesQuery';
import BaseSelectFooter from '../BaseSelectFooter/BaseSelectFooter';

interface CityOption {
	id: string;
	name: string;
	nameAr: string;
}

interface ZoneSelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
	init?: CityOption | CityOption[];
	value?: string | string[];
	onChange?: (v: string | string[], foo?: { label: string; value: string } | undefined) => void;
	valueWithName?: boolean;
}

const ZoneSelect: FC<ZoneSelectProps> = ({ value, onChange, valueWithName, init, ...rest }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
	const [items, setItems] = useState<TZoneItem[]>([]);
	const [skip, setSkip] = useState(0);
	const { data, isLoading } = useZonesQuery(
		{ name: debouncedSearchValue, limit: 20, total: true, skip: skip },
		{
			staleTime: 5 * 1000, // 5 seconds
			onSuccess(data) {
				setItems((prev) => [...prev, ...data?.data]);
			},
		}
	);
	const debouncedChangeHandler = useDebounce((value: string) => {
		setDebouncedSearchValue(value);
		setSkip(0);
		setItems([]);
	});
	const handleSearch = (value: string) => {
		setSearchQuery(value);
		debouncedChangeHandler(value);
	};
	const options = useMemo(() => {
		const mappedOptions =
			items.length > 0
				? items.map(({ id, name }) => ({ label: name, value: id }))
				: data?.data?.map(({ id, name }) => ({ label: name, value: id })) || [];
		const initOptions = Array.isArray(init)
			? init.map((v) => ({ label: v.name, value: v.id }))
			: init && [{ label: init.name, value: init.id }];

		const optionValues = Array.isArray(init) ? init.map((v) => v.id) : [init?.id];

		if (optionValues.some((optionValue) => mappedOptions.some((option) => option.value === optionValue))) {
			return mappedOptions;
		}

		return [...(initOptions ? initOptions : []), ...mappedOptions];
	}, [items, init]);
	const dropdownRender = (menu: React.ReactNode) => (
		<BaseSelectFooter
			isLoading={isLoading}
			itemsLength={items.length}
			totalLength={data?.totalRecords}
			menu={menu}
		></BaseSelectFooter>
	);

	return (
		<Select
			popupMatchSelectWidth={false}
			placeholder={'Zone'}
			loading={isLoading}
			value={value}
			showSearch
			{...rest}
			onPopupScroll={(e: any) => {
				if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - 10) {
					if (data?.totalRecords! > items.length) {
						setSkip(items.length);
					}
				}
			}}
			searchValue={searchQuery}
			filterOption={false}
			onSearch={handleSearch}
			onChange={(e1, e2) => onChange?.(e1, e2 as any)}
			options={options}
			dropdownRender={dropdownRender}
		/>
	);
};

export default ZoneSelect;
