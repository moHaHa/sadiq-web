import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { TCategoryMutation } from '~/server/category/types';
import { useCategoryMutation } from '~/server/category/useCategoryMutation/useCategoryMutation';
import UpsertCategory from './components/UpsertCategory';

interface CategoryNewProps {}

const CategoryNew: FC<CategoryNewProps> = ({}) => {
	const { mutate, isLoading } = useCategoryMutation();
	const [body, setBody] = useState<Partial<TCategoryMutation> | undefined>();
	const navigate = useNavigate();
	return (
		<div>
			<MainHeader></MainHeader>
			<UpsertCategory></UpsertCategory>
		</div>
	);
};

export default CategoryNew;
