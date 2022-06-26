import { DatePickerProps } from 'antd';
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
} from '../../components';
import { useAppSelector } from '../../hooks/useRedux';
import { Screen } from '../../styles';

type FormType = {
	repo: string;
	contributor: string;
	branch: string;
	since: string;
	until: string;
};

const Find = () => {
	const user = useAppSelector((store) => store.user);

	const [form, setForm] = useState<FormType>({
		repo: '',
		contributor: '',
		branch: 'all',
		since: '',
		until: '',
	});
	const [date, setDate] = useState<any>();

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

	return (
		<Screen>
			<Card
				styles={{
					width: '100%',
					height: '100%',
					align: 'start',
					justify: 'start',
				}}
			>
				<Text size="xlarge" fontDisplay color="gray_1" weight="bold">
					Olá {user.name}
				</Text>
				<Text>@{user.user}</Text>

				<Row>
					<Input
						type="text"
						placeholder="username/repository"
						title="Repositório"
					/>
					<Input type="select" title="Contribuidor" />
					<Input type="select" title="Branch" />
					<Input
						type="date"
						title="Data"
						value={date}
						onChange={datePickerHandler}
					/>
				</Row>
				<Row align="end">
					<Button buttonType="flat" buttonColor="gray">
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
				<CommitItem
					url="https://github.com/lubysoftware/LabLuby_APP/commit/d18220c4aa821d74f67afa0ee3f501f37bb88a2e"
					message="refactor: validation rules"
					description="algo blablablablabla"
				/>
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
