import React from 'react';
import { Text } from '..';
import { Container } from './styles';

type UserDataProps = {
	avatarUrl: string;
	user: string;
	name: string;
};
const UserData = (props: UserDataProps) => {
	return (
		<Container>
			<img src={props.avatarUrl} alt={props.name} />
			<div>
				<Text size="xlarge" fontDisplay color="gray_1" weight="bold">
					Olá {props.name}
				</Text>
				<Text>@{props.user}</Text>
			</div>
		</Container>
	);
};

export default UserData;
