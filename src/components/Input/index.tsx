import React from 'react';
import {
	InputWrapper,
	StyledInput,
	StyledSelect,
	StyledDatePicker,
    DatePickerWrapper,
    SelectWrapper,
} from './styles';
import { Text } from '..';

type InputProps = {
	type?: 'text' | 'select' | 'multiselect' | 'date' | 'email' | 'password';
	placeholder?: string;
	title: string;
};
const BaseInput = ({ type = 'text', placeholder, title }: InputProps) => {
	if (type === 'text') {
		return (
			<InputWrapper>
				<Text weight="semibold" size="small" id="title">
					{title}
				</Text>
				<StyledInput placeholder={placeholder} />
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
