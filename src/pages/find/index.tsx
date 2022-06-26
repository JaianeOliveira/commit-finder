import { DatePickerProps, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {
	Button,
	Card,
	Input,
	Row,
	Text,
	Divider,
	CommitItem,
	UserData,
} from '../../components';
import { useAppSelector } from '../../hooks/useRedux';
import {
	getBranches,
	getCommits,
	getCommitsInAllBranches,
	getRepoContributors,
} from '../../shared/requests';
import { Screen } from '../../styles';

type FormType = {
	repo: string;
	contributor: string;
	sha: string;
	since: string;
	until: string;
};

type Branch = {
	name: string;
	sha: string;
};

type Branches = Branch[] | [];

const Find = () => {
	const user = useAppSelector((store) => store.user);

	const [form, setForm] = useState<FormType>({
		repo: '',
		contributor: '',
		sha: 'all',
		since: '',
		until: '',
	});
	const [date, setDate] = useState<any>();
	const [branches, setBranches] = useState<Branches>([]);
	const [contributors, setContributors] = useState<string[]>([]);
	const [commits, setCommits] = useState<{ message: string; url: string }[]>(
		[]
	);

	const dateFormat = (date: string) => {
		const splitDate = date.split('/');
		setForm((currentData) => ({
			...currentData,
			since: `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}T00:00:00Z`,
			until: `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}T23:59:59Z`,
		}));
	};

	const datePickerHandler = (e: any, stringData: string) => {
		setDate(e);
		dateFormat(stringData);
	};

	const repoHandler = (e: any) => {
		setForm((currentData) => ({ ...currentData, repo: e.target.value }));
	};

	const getContributorHandler = useCallback(async () => {
		if (user.token && form.repo) {
			await getRepoContributors(user.token, form.repo, setContributors);
		}
	}, [form.repo, user.token]);

	const submitHandler = async () => {
		if (user.token) {
			const allBranches = branches.map((item) => item.name);
			setCommits([]);
			const data =
				form.sha === 'all'
					? await getCommitsInAllBranches(
							allBranches,
							form,
							setCommits,
							user.token
					  )
					: await getCommits(form, user.token);
			form.sha !== 'all' && setCommits(data);
		}
	};
	console.log(commits);

	useEffect(() => {
		getContributorHandler();
	}, [getContributorHandler]);

	useEffect(() => {
		user.token && form.repo && getBranches(user.token, form.repo, setBranches);
	}, [form.repo, user.token]);

	return (
		<Screen>
			<Card
				styles={{
					width: '100%',
					height: '100%',
					align: 'start',
					justify: 'start',
					hStretch: true,
				}}
			>
				{user.token && user.name && user.profile && user.user && (
					<UserData
						avatarUrl={`https://github.com/${user.user}.png`}
						name={user.name}
						user={user.user}
					/>
				)}
				<Row>
					<Input
						type="text"
						placeholder="username/repository"
						title="Repositório"
						onChange={repoHandler}
						value={form.repo}
					/>
					<Input
						type="select"
						title="Contribuidor"
						onChange={(e) =>
							setForm((currentData) => ({ ...currentData, contributor: e }))
						}
						value={form.contributor}
					>
						{contributors?.map((contributor) => (
							<Select.Option value={contributor}>{contributor}</Select.Option>
						))}
					</Input>
					<Input
						type="select"
						title="Branch"
						value={form.sha}
						onChange={(e) =>
							setForm((currentValue) => ({ ...currentValue, sha: e }))
						}
					>
						<Select.Option value="all">Todas</Select.Option>
						{branches?.map((branch) => (
							<Select.Option value={branch.name}>{branch.name}</Select.Option>
						))}
					</Input>
					<Input
						type="date"
						title="Data"
						value={date}
						onChange={datePickerHandler}
					/>
				</Row>
				<Row align="end">
					<Button buttonType="flat" buttonColor="gray" onClick={submitHandler}>
						Buscar
					</Button>
				</Row>
				<Button
					buttonType="inline"
					onClick={() =>
						toast.success('Copiado!', {
							autoClose: 1300,
							hideProgressBar: true,
						})
					}
				>
					Copiar tudo
				</Button>
				<Divider />
				{commits?.map((commit) => (
					<CommitItem message={commit.message} url={commit.url} />
				))}
			</Card>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Screen>
	);
};

export default Find;
