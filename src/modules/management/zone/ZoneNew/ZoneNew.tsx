import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { TZoneMutation } from '~/server/zone/types';
import { useZoneMutation } from '~/server/zone/useZoneMutation/useZoneMutation';
import UpsertZone from './components/UpsertZone';

interface ZoneNewProps {}

const ZoneNew: FC<ZoneNewProps> = ({}) => {
	const { mutate, isLoading } = useZoneMutation();
	const [body, setBody] = useState<Partial<TZoneMutation> | undefined>();
	const navigate = useNavigate();
	return (
		<div>
			<MainHeader></MainHeader>
			<UpsertZone></UpsertZone>
		</div>
	);
};

export default ZoneNew;
