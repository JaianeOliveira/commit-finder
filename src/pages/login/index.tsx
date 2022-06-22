import React from 'react';
import { Screen } from '../../styles';
import { Card, Text, Input } from '../../components';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Login = () => {
	return (
		<Screen>
			<Card
				styles={{
					align: 'start',
					justify: 'start',
				}}
			>
				<Text weight="bold" size="xlarge" fontDisplay>
					Gere uma lista dos seus commits
				</Text>
				<Input
					title="Token do Github"
					placeholder="abc-2a446fsa..."
					endIcon={<QuestionCircleOutlined />}
					endIconMessage="Alguma mensagem"
				/>
				<Input
					type="select"
					title="Token do Github"
					placeholder="abc-2a446fsa..."
				/>
				<Input
					type="date"
					title="Token do Github"
					placeholder="abc-2a446fsa..."
				/>
			</Card>
		</Screen>
	);
};

export default Login;
