import { CopyOutlined, LinkOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';
import { Container } from './styles';

type CommitItemProps = {
	message: string;
	description?: string;
	url: string;
};

const CommitItem = (props: CommitItemProps) => {
	const commit = `${props.message}\n${
		props.description ? props.description + '\n' : ''
	} ${props.url}`;
	const url = props.url;

	return (
		<Container>
			<div className="commitArea">
				<strong>{props.message}</strong>
				{props.description && <p>{props.description}</p>}
			</div>
			<div className="buttonsArea">
				<Tooltip title="clique para copiar o link do commit">
					<button onClick={() => navigator.clipboard.writeText(url)}>
						<LinkOutlined size={30} />
					</button>
				</Tooltip>
				<Tooltip title="clique para copiar o commit">
					<button onClick={() => navigator.clipboard.writeText(commit)}>
						<CopyOutlined size={30} />
					</button>
				</Tooltip>
			</div>
		</Container>
	);
};

export default CommitItem;
