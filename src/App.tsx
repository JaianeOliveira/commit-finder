import React, { useEffect, useState } from 'react';
import { Centered } from './styles';

import { get } from './shared/requests';
const App = () => {
	const [user, setUser] = useState<any>();

	const getUser = async () => {
		const data = await get('user');
		if ((data.status = 200)) {
			setUser(data.data);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	if (!user && process.env.REACT_APP_GITHUB_TOKEN) {
		return <Centered>...carrengando</Centered>;
	}

	if (!process.env.REACT_APP_GITHUB_TOKEN) {
		return (
			<Centered>
				<h1>Hellow desconhecido</h1>
			</Centered>
		);
	}
	return (
		<Centered>
			<h1>Hellow {user.name}</h1>
		</Centered>
	);
};

export default App;
