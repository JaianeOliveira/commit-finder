import React from 'react';
import { InputWrapper, StyledInput, StyledSelect } from './styles';
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
			<InputWrapper>
				<Text weight="semibold" size="small" id="title">
					{title}
				</Text>
				<StyledSelect placeholder={placeholder} />
			</InputWrapper>
		);
	}
	return <div>Input</div>;
};

export default BaseInput;
