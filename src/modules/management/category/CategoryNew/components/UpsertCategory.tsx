import { Button, Input } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminViews } from '~/router';
import { TCategoryMutation } from '~/server/category/types';
import { invalidateCategoriesQuery } from '~/server/category/useCategoriesQuery/useCategoriesQuery';
import { useCategoryMutation } from '~/server/category/useCategoryMutation/useCategoryMutation';
interface UpsertCategoryProps {
	id?: string;
	initialValues?: TCategoryMutation;
}

const UpsertCategory: FC<UpsertCategoryProps> = ({ id, initialValues }) => {
	const { mutate, isLoading } = useCategoryMutation();
	const [body, setBody] = useState<Partial<TCategoryMutation> | undefined>(initialValues);
	const navigate = useNavigate();
	return (
		<>
			<div className='pt-70px px-lg'>
				<div className='mb-12px  flex justify-center '>
					<Input
						value={body?.name}
						onChange={(e) => setBody({ ...body, name: e.target.value })}
						className='w-400px'
						placeholder='اسم التصنيف'
					></Input>
				</div>

				<div className='mb-12px  flex justify-center '>
					<Button
						onClick={() => {
							body &&
								mutate(
									{
										id: id,
										body: body as TCategoryMutation,
									},
									{
										onSuccess() {
											navigate(adminViews.Categories.path);
											invalidateCategoriesQuery();
										},
									}
								);
						}}
						className='font-sans'
						type='primary'
						loading={isLoading}
					>
						حفظ
					</Button>
				</div>
			</div>
		</>
	);
};

export default UpsertCategory;
