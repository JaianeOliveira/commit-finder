import React from 'react';
import { Screen } from '../../styles';
import { Card, Text, Input } from '../../components';

const Login = () => {
	return (
		<Screen>
			<Card
				styles={{
					align: 'start',
					justify: 'start',
				}}
			>
				<Text weight="bold" size="xlarge">
					Gere uma lista dos seus commits
				</Text>
				<Input title="Token do Github" placeholder="abc-2a446fsa..." />
				<Input
					type="select"
					title="Token do Github"
					placeholder="abc-2a446fsa..."
				/>
			</Card>
		</Screen>
	);
};

export default Login;
