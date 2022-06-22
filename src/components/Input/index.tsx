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
};
const BaseInput = ({
	type = 'text',
	placeholder,
	title,
	startIcon,
	endIcon,
	endIconMessage,
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
				<StyledSelect placeholder={placeholder} />
			</SelectWrapper>
		);
	}

	if (type === 'date') {
		return (
			<DatePickerWrapper>
				<Text weight="semibold" size="small" id="title">
					{title}
				</Text>

				<StyledDatePicker />
			</DatePickerWrapper>
		);
	}
	return <div>Input</div>;
};

export default BaseInput;
