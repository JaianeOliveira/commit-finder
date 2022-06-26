import React from 'react';
import {
	Button,
	Card,
	Input,
	Row,
	Text,
	Divider,
	CommitItem,
} from '../../components';
import { Screen } from '../../styles';

const Find = () => {
	return (
		<Screen>
			<Card
				styles={{
					width: '100%',
					height: '100%',
					align: 'start',
					justify: 'start',
				}}
			>
				<Text size="xlarge" fontDisplay color="gray_1" weight="bold">
					Olá Jaiane Oliveira
				</Text>
				<Text>@JaianeOliveira</Text>

				<Row>
					<Input
						type="text"
						placeholder="username/repository"
						title="Repositório"
					/>
					<Input type="select" title="Contribuidor" />
					<Input type="select" title="Branch" />
					<Input type="date" title="Data" />
				</Row>
				<Row align="end">
					<Button buttonType="flat" buttonColor="gray">
						Buscar
					</Button>
				</Row>
				<Button buttonType="inline">Copiar tudo</Button>
				<Divider />
				<CommitItem
					url="https://github.com/lubysoftware/LabLuby_APP/commit/d18220c4aa821d74f67afa0ee3f501f37bb88a2e"
					message="refactor: validation rules
				"
				/>
			</Card>
		</Screen>
	);
};

export default Find;