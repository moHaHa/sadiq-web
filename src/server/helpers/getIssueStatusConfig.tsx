import { IssueStatus } from '../types/issueStatus.type';

export const getIssueStatusConfig = (
	status: IssueStatus
): {
	label: string;
	color: string;
	tag: JSX.Element;
} => {
	const config: Record<IssueStatus, { label: string; color: string; tag: JSX.Element }> = {
		open: {
			label: 'مفتوح',
			color: '#9B59B655', // Elegant purple for open issues
			tag: (
				<div
					className='inline-block'
					style={{
						color: '#9B59B6',
						padding: '4px 8px',
						borderRadius: '4px',
						background: '#F6EAFB', // Light purple background
					}}
				>
					مفتوح <div className='i-solar:clock-circle-linear' />
				</div>
			),
		},
		'in progress': {
			label: 'قيد العمل',
			color: '#1E90FF55', // Bright blue for active progress
			tag: (
				<div
					className='inline-block'
					style={{
						color: '#1E90FF',
						padding: '4px 8px',
						borderRadius: '4px',
						background: '#E6F4FF', // Light blue background
					}}
				>
					قيد العمل <div className='i-svg-spinners:pulse-multiple' />
				</div>
			),
		},
		closed: {
			label: 'تم الحل',
			color: '#27AE6055', // Soft green for resolved issues
			tag: (
				<div
					className='inline-block'
					style={{
						color: '#27AE60',
						padding: '4px 8px',
						borderRadius: '4px',
						background: '#EAF8F1', // Light green background
					}}
				>
					تم الحل <div className='i-solar:check-read-linear' />
				</div>
			),
		},
	};

	return config[status];
};
