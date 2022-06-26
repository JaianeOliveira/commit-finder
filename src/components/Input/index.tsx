import React, { ReactNode } from 'react';
import {
	InputWrapper,
	StyledInput,
	StyledSelect,
	StyledDatePicker,
	DatePickerWrapper,
	SelectWrapper,
} from './styles';
import { Text } from '..';

import { Tooltip } from 'antd';

type InputProps = {
	type?: 'text' | 'select' | 'multiselect' | 'date' | 'email' | 'password';
	placeholder?: string;
	title: string;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	endIconMessage?: string;
	value?: any;
	onChange?: (...args: any) => void;
};
const BaseInput = ({
	type = 'text',
	placeholder,
	title,
	startIcon,
	endIcon,
	endIconMessage,
	value,
	onChange,
}: InputProps) => {
	if (type === 'text') {
		return (
			<InputWrapper>
				<Text weight="semibold" size="small" id="title">
					{title}
				</Text>
				<StyledInput
					prefix={startIcon}
					suffix={<Tooltip title={endIconMessage}>{endIcon}</Tooltip>}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</InputWrapper>
		);
	}

	if (type === 'select') {
		return (
			<SelectWrapper>
				<Text weight="semibold" size="small" id="title">
					{title}
				</Text>
				<StyledSelect
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</SelectWrapper>
		);
	}

	if (type === 'date') {
		return (
			<DatePickerWrapper>
				<Text weight="semibold" size="small" id="title">
					{title}
				</Text>

				<StyledDatePicker
					format="DD/MM/YYYY"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</DatePickerWrapper>
		);
	}
	return <div>Input</div>;
};

export default BaseInput;
