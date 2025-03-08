import { Modal } from 'antd';
import { FC, useState } from 'react';
import DsIssuesFilter from './DsIssuesFilter';

interface DsIssuesFilterDialogProps {}

const DsIssuesFilterDialog: FC<DsIssuesFilterDialogProps> = ({}) => {
	const [open, setOpen] = useState(false);
	const [state, setState] = useState<any>({});
	return (
		<>
			<button className='btn font-sans ' onClick={() => setOpen(true)}>
				تصفية <div className='i-solar:filter-broken '></div>
			</button>
			<Modal title={<div className='font-sans'>تصفية</div>} open={open} onCancel={() => setOpen(false)}>
				<DsIssuesFilter onChange={setState} value={state}></DsIssuesFilter>
			</Modal>
		</>
	);
};

export default DsIssuesFilterDialog;
