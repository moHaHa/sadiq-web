import { Spin } from 'antd';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { useCategoryByIdQuery } from '~/server/category/useCategoryByIdQuery/useCategoryByIdQuery';
import UpsertCategory from '../CategoryNew/components/UpsertCategory';

interface CategoryByIdEditProps {}

const CategoryByIdEdit: FC<CategoryByIdEditProps> = ({}) => {
	const { id } = useParams();
	const { isLoading, data } = useCategoryByIdQuery(id as string);

	const initialValues = useMemo(() => {
		if (data != undefined) {
			return { name: data.name };
		} else {
			return undefined;
		}
	}, [data]);
	return (
		<div>
			<MainHeader></MainHeader>
			{isLoading ? <Spin></Spin> : <UpsertCategory initialValues={initialValues} id={id}></UpsertCategory>}
		</div>
	);
};

export default CategoryByIdEdit;
