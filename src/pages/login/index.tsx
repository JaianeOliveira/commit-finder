import React, { useState } from 'react';
import { Screen } from '../../styles';
import { Card, Text, Input, Button, Row } from '../../components';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { IoLogoGithub } from 'react-icons/io';
import { getUser } from '../../shared/requests';
import { useAppDispatch } from '../../hooks/useRedux';
import { setUser as setUserDispatch } from '../../shared/redux/user';
const Login = () => {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<{
		name: string | null;
		token: string | null;
		profile: string | null;
		user: string | null;
	}>({
		name: null,
		token: null,
		profile: null,
		user: null,
	});
	const dispatch = useAppDispatch();

	const getUserHandler = async () => {
		if (token) {
			const result = await getUser(token, setUser);
			if (result) {
				dispatch(setUserDispatch(user));
			}
		}
	};

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
					onChange={(e) => setToken(e.target.value)}
					value={token}
				/>
				<Row align="between">
					<Button disabled>
						<IoLogoGithub size={18} color="#FFFFFF" />
						Entrar com o github
					</Button>
					<Button buttonColor="white" onClick={getUserHandler}>
						Entrar
					</Button>
				</Row>
			</Card>
		</Screen>
	);
};

export default Login;
