import { Col, Divider, Row, Spin } from 'antd';
import { FC, ReactNode } from 'react';
interface BaseSelectFooter {
	menu: ReactNode;
	itemsLength: number | undefined;
	totalLength: number | undefined;
	isLoading: boolean | undefined;
	hideDetails?: boolean;
}
const BaseSelectFooter: FC<BaseSelectFooter> = ({ menu, isLoading, itemsLength, totalLength, hideDetails = false }) => {
	return (
		<>
			<div>
				{menu}

				<>
					<Divider style={{ margin: '8px 0' }} />
					<Row style={{ padding: '0 8px 4px' }} justify={'space-between'}>
						{hideDetails == false && <Col>{`${itemsLength} / ${totalLength ?? '...'}`} </Col>}
						<Col>{isLoading && <Spin></Spin>}</Col>
					</Row>
				</>
			</div>
		</>
	);
};
export default BaseSelectFooter;
