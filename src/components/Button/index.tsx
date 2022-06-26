import React from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
	children: React.ReactNode;
	buttonType?: 'normal' | 'flat' | 'inline';
	buttonColor?: string | 'black' | 'gray' | 'white';
	color?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	submit?: boolean;
	disabled?: boolean;
};

const Button = ({
	children,
	buttonType = 'normal',
	buttonColor = 'black',
	color,
	icon,
	submit,
	disabled,
	onClick,
}: ButtonProps) => {
	return (
		<StyledButton
			disabled={disabled}
			type={submit ? 'submit' : 'button'}
			buttonType={buttonType}
			buttonColor={buttonColor}
			color={color}
			onClick={onClick}
		>
			{icon && icon}
			{children}
		</StyledButton>
	);
};

export default Button;
