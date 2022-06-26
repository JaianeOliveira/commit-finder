import { CopyOutlined, LinkOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';

type CommitItemProps = {
	message: string;
	description?: string;
	url: string;
};

const CommitItem = (props: CommitItemProps) => {
	const commit = `${props.message}${
		props.description ? '\n' + props.description + '\n' : '\n'
	}${props.url}`;
	const url = props.url;

	const copyHandler = (value: string) => {
		navigator.clipboard.writeText(value);
		toast.success('Copiado!', {
			autoClose: 1300,
			hideProgressBar: true,
		});
	};

	return (
		<Container>
			<div className="commitArea">
				<strong>{props.message}</strong>
				{props.description && <p>{props.description}</p>}
			</div>
			<div className="buttonsArea">
				<Tooltip title="clique para copiar o link do commit">
					<button onClick={() => copyHandler(url)}>
						<LinkOutlined size={30} />
					</button>
				</Tooltip>
				<Tooltip title="clique para copiar o commit">
					<button onClick={() => copyHandler(commit)}>
						<CopyOutlined size={30} />
					</button>
				</Tooltip>
			</div>
		</Container>
	);
};

export default CommitItem;
