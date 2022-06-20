import React, { useCallback, useEffect, useState } from 'react';
import { Centered } from '../../styles';
import { StyledInput as Input, Title, Description, Row } from './styled';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
	getUser,
	getRepoContributors,
	getCommits,
	getBranches,
	getSha,
} from '../../shared/requests';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { forEachLeadingCommentRange } from 'typescript';

type Branch = {
	name: string;
	sha: string;
};

type Branches = Branch[] | [];

const HomePage = () => {
	const [user, setUser] = useState<any>();
	const [contributors, setContributors] = useState([]);
	const [branches, setBranches] = useState<Branches>([]);
	const [selectedBranch, setSelectedBranch] = useState('');
	const [date, setDate] = useState();
	const [form, setForm] = useState({
		repo: '',
		token: '',
		contributor: '',
		since: '',
		until: '',
		sha: '',
	});

	const defaultValuesHandler = useCallback(() => {
		dateFormat();

		// if (user) {
		// 	setForm((currentData) => ({
		// 		...currentData,
		// 		contributor: user.name,
		// 	}));
		// }
	}, [user]);

	const inputChangeHandler = (e: any) => {
		setForm((currentData) => ({ ...currentData, token: e.target.value }));
	};

	const repoChangeHandler = (e: any) => {
		setForm((currentData) => ({ ...currentData, repo: e.target.value }));
	};

	const dateFormat = (date = new Date()) => {
		setForm((currentData) => ({
			...currentData,
			since: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T00:00:00Z`,
			until: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}T23:59:59Z`,
		}));
	};

	const branchesHandler = async (e: any) => {
		setSelectedBranch(e.target.value);

		const sha = branches?.find((item) => item.name === e.target.value)?.sha;
		sha && setForm((currentData) => ({ ...currentData, sha: sha }));
	};

	const dateChangeHandler = (data: any) => {
		setDate(data);
		dateFormat(data);
	};

	const contributorChangeHandler = (e: any) => {
		setForm((currentData) => ({ ...currentData, contributor: e.target.value }));
	};
	const getUserHandler = async () => {
		if (form.token.length) {
			const result = await getUser(form.token, setUser);
		}
	};

	const submitHandler = () => {
		getCommits(form);
	};
	const contentWithoutUser = (
		<>
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
				label="Github Token"
				variant="outlined"
				onChangeCapture={inputChangeHandler}
				value={form.token}
			/>
			<Button
				variant="contained"
				onClick={getUserHandler}
				disabled={!form.token}
			>
				Enviar
			</Button>
		</>
	);
	useEffect(() => {
		form.token &&
			form.repo &&
			getRepoContributors(form.token, form.repo, setContributors);
	}, [form.repo, form.token]);

	useEffect(() => {
		form.token && form.repo && getBranches(form.token, form.repo, setBranches);
	}, [form.repo, form.token]);

	useEffect(() => {
		defaultValuesHandler();
	}, [defaultValuesHandler, form.repo]);

	const contentWithUser = (
		<>
			<Row>
				<FormControl>
					<Input
						label="Link do repositório"
						variant="outlined"
						placeholder="usuario/repositorio"
						value={form.repo}
						onChange={repoChangeHandler}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Contribuidor</InputLabel>
					<Select
						fullWidth
						id="contributor"
						value={form.contributor}
						label="Contribuidor"
						onChange={contributorChangeHandler}
						disabled={!contributors.length}
						sx={{
							width: 150,
						}}
					>
						{contributors.length &&
							contributors.map((item: any) => (
								<MenuItem key={item.login} value={item.login}>
									{item.login}
								</MenuItem>
							))}
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel>Branch</InputLabel>
					<Select
						fullWidth
						id="branch"
						value={selectedBranch}
						label="Branch"
						placeholder="Branch"
						onChange={branchesHandler}
						disabled={!branches.length}
						sx={{
							width: 150,
						}}
					>
						{branches.length &&
							branches.map((item) => (
								<MenuItem key={item.name} value={item.name}>
									{item.name}
								</MenuItem>
							))}
					</Select>
				</FormControl>
				<FormControl>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label="Date desktop"
							value={date}
							onChange={dateChangeHandler}
							renderInput={(params: any) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</FormControl>
			</Row>
			<Button
				variant="contained"
				onClick={submitHandler}
				disabled={!form.repo || !form.contributor}
			>
				Gerar Relatório de Commits
			</Button>
		</>
	);

	return (
		<Centered>
			<Title>Oi {user ? user.name : 'pessoa'}</Title>
			{user ? contentWithUser : contentWithoutUser}
		</Centered>
	);
};

export default HomePage;
