import styled from 'styled-components';
import { Input, Select } from 'antd';

export const InputWrapper = styled.div`
	width: 100%;

	#title {
		position: relative;
		top: 12.5px;
		left: 8px;
		background-color: ${(props) => props.theme.white};
		display: inline;
		width: auto;
		padding: 0 10px;
		z-index: 1;
	}
`;

export const StyledInput = styled(Input)`
	padding: 14px 20px 10px 20px;
	border-radius: 5px;
	border: 1px solid ${(props) => props.theme.gray_2};
	box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1);
	width: 100%;
	height: 50px;
	color: ${(props) => props.theme.gray_2};

	&:hover {
		box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
		border: 1px solid ${(props) => props.theme.gray_2};
	}
	&:focus {
		box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
		border: 1px solid ${(props) => props.theme.gray_2};
	}

	&::placeholder {
		font-weight: 300;
	}
`;

export const StyledSelect = styled(Select)`
	&.ant-select {
		border-radius: 5px;
		border: 1px solid ${(props) => props.theme.gray_2} !important;
		box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.1) !important;
		width: 100%;
	}

	&.ant-select .ant-select-selector {
		padding: 20px 20px 20px 20px;
		color: ${(props) => props.theme.gray_2};
		height: 50px;
	}

	&:hover,
	&.ant-select-focused,
	&.ant-select-single,
	&.ant-select-open {
		&:not(.ant-select-disabled) {
		}

		& .ant-select-selection-item:hover {
		}

		& .ant-select-selector {
			border: none !important;
			box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1) !important;
		}
	}

	&.ant-select .ant-select-selector::placeholder {
		font-weight: 300;
	}
`;
