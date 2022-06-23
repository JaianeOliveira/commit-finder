import React from 'react';
import { Screen } from '../../styles';
import { Card, Text, Input, Button, Row } from '../../components';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { IoLogoGithub } from 'react-icons/io';
const Login = () => {
	return (
		<Screen>
			<Card
				styles={{
					align: 'start',
					justify: 'start',
				}}
			>
				<Text weight="bold" size="xlarge" fontDisplay color="gray_1">
					Commit Finder
				</Text>
				<Input
					title="Token do Github"
					placeholder="abc-2a446fsa..."
					endIcon={<QuestionCircleOutlined />}
					endIconMessage="Alguma mensagem"
				/>
				<Row align="between">
					<Button disabled>
						<IoLogoGithub size={18} color="#FFFFFF" />
						Entrar com o github
					</Button>
					<Button buttonColor="white">Entrar</Button>
				</Row>
			</Card>
		</Screen>
	);
};

export default Login;
