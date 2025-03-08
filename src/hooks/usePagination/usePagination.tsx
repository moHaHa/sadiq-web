import { TablePaginationConfig } from 'antd';
import { useMemo, useState } from 'react';

type IPaginationConfig = {
	pagination: TablePaginationConfig;
	limit: number;
	skip: number;
	setPage: (page: number) => void;
};
export const usePagination = (
	options: { initialPage: number; pageSize: number } = { initialPage: 1, pageSize: 5 }
): IPaginationConfig => {
	const [page, setPage] = useState<number>(options.initialPage);
	const [limit, setLimit] = useState(options.pageSize);
	const skip = useMemo(() => (page - 1) * limit, [page, limit]);
	const handlePageChange = (p: number, pageSize?: number) => {
		setPage(p);
		if (pageSize != undefined && pageSize != limit) {
			setPage(pageSize);
			setPage(1);
		}
	};
	const handleSizeChange = (current: number, size: number) => {
		setLimit(size);
	};

	return {
		pagination: {
			onChange: handlePageChange,
			pageSize: limit,
			current: page,
			onShowSizeChange: handleSizeChange,
			showTotal: (e) => (
				<>
					<span style={{ opacity: '80%' }}>{'total'} </span> <strong>{e}</strong>
				</>
			),
		},
		limit,
		skip,
		setPage: setPage,
	};
};
