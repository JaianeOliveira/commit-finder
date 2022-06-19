import React, { useEffect, useState } from 'react';
import { Centered } from '../../styles';
import { StyledInput as Input, Title, Description } from './styled';
import theme from '../../styles/themes/default';
import Button from '@mui/material/Button';
import axios from 'axios';
import { getUser } from '../../shared/requests';

const HomePage = () => {
	const [user, setUser] = useState<any>();
	const [token, setToken] = useState('');

	const inputChangeHandler = (e: any) => {
		setToken(e.target.value);
	};
	console.log(user);
	return (
		<Centered>
			<Title>Oi {user ? user.name : 'pessoa'}</Title>
			<Description>
				Para poder ter acesso a todos os seus repositórios do github eu preciso
				que você me diga seu token de acesso. Se você são sabe qual é, pode dar
				uma olhada{' '}
				<a href="https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">
					aqui
				</a>
				.
			</Description>
			<Input
				id="outlined-basic"
				label="Github Token"
				variant="outlined"
				onChange={inputChangeHandler}
				value={token}
			/>
			<Button variant="contained" onClick={() => getUser(token, setUser)}>
				Enviar
			</Button>
		</Centered>
	);
};

export default HomePage;
