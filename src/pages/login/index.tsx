import React from 'react';
import { Screen } from '../../styles';
import { Card, Text } from '../../components';

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
			</Card>
		</Screen>
	);
};

export default Login;
