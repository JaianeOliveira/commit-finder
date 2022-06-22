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
	getCommitsInAllBranches,
} from '../../shared/requests';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useAppDispatch } from '../../hooks/useRedux';
import { setUser as setUserDispatch } from '../../shared/redux/user';
import ptbr from 'date-fns/locale/pt-BR';

type Branch = {
	name: string;
	sha: string;
};

type Branches = Branch[] | [];

const HomePage = () => {
	const dispatch = useAppDispatch();
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
	const [contributors, setContributors] = useState<string[]>([]);
	const [branches, setBranches] = useState<Branches>([]);
	const [commits, setCommits] = useState<{ message: string; url: string }[]>(
		[]
	);
	const [selectedBranch, setSelectedBranch] = useState('all');
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
	}, []);

	const inputChangeHandler = (e: any) => {
		setForm((currentData) => ({ ...currentData, token: e.target.value }));
	};

	const repoChangeHandler = (e: any) => {
		setForm((currentData) => ({ ...currentData, repo: e.target.value }));
	};

	const dateFormat = (date = new Date()) => {
		const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
		const currentMonth = date.getMonth() + 1;
		const month = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
		setForm((currentData) => ({
			...currentData,
			since: `${date.getFullYear()}-${month}-${day}T00:00:00Z`,
			until: `${date.getFullYear()}-${month}-${day}T23:59:59Z`,
		}));
	};

	const branchesHandler = async (e: any) => {
		setSelectedBranch(e.target.value);

		const branch = branches.find((item) => item.name === selectedBranch);
		setForm((currentData) => ({
			...currentData,
			sha: e.target.value,
		}));
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
			if (result) {
				dispatch(setUserDispatch(user));
			}
		}
	};

	const submitHandler = async () => {
		const allBranches = branches.map((item) => item.name);
		setCommits([]);
		const data =
			selectedBranch === 'all'
				? await getCommitsInAllBranches(allBranches, form, setCommits)
				: await getCommits(form);
		selectedBranch !== 'all' && setCommits(data);

		console.log(commits);
	};

	const getContributorHandler = useCallback(async () => {
		if (form.token && form.repo) {
			const result = await getRepoContributors(
				form.token,
				form.repo,
				setContributors
			);
		}
	}, [form.repo, form.token]);

	useEffect(() => {
		getContributorHandler();
	}, [getContributorHandler]);

	useEffect(() => {
		form.token && form.repo && getBranches(form.token, form.repo, setBranches);
	}, [form.repo, form.token]);

	useEffect(() => {
		defaultValuesHandler();
	}, [defaultValuesHandler, form.repo]);

	return (
		<Centered>
			<Title>Oi {user.token ? user.name : 'pessoa'}</Title>
			{!user.token ? (
				<>
					<Description>
						Para poder ter acesso a todos os seus repositórios do github eu
						preciso que você me diga seu token de acesso. Se você são sabe qual
						é, pode dar uma olhada{' '}
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
			) : (
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
								defaultValue={user.user}
								label="Contribuidor"
								onChange={contributorChangeHandler}
								disabled={!contributors.length}
								sx={{
									width: 150,
								}}
							>
								{contributors.length &&
									contributors.map((item) => (
										<MenuItem key={item} value={item}>
											{item}
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
								<MenuItem key={0} value="all">
									Todas
								</MenuItem>
								{branches.length &&
									branches.map((item) => (
										<MenuItem key={item.name} value={item.name}>
											{item.name}
										</MenuItem>
									))}
							</Select>
						</FormControl>
						<FormControl>
							<LocalizationProvider dateAdapter={AdapterDateFns} locale={ptbr}>
								<DatePicker
									label="Data"
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

					{commits[0]?.message ? (
						<TextField
							fullWidth
							label="Relatório de commits"
							multiline
							placeholder="Nada aqui ainda"
							value={commits.map(
								(commit: { message: string; url: string }) =>
									`${commit.message}\n${commit.url}\n\n`
							)}
						/>
					) : (
						<Description>
							Você ainda não gerou um relatório ou não há commits para mostrar
						</Description>
					)}
				</>
			)}
		</Centered>
	);
};

export default HomePage;
