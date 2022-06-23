import React from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
	children: React.ReactNode;
	buttonType?: 'normal' | 'flat';
	buttonColor?: string | 'black' | 'gray' | 'white';
	color?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	submit?: boolean;
};

const Button = ({
	children,
	buttonType = 'normal',
	buttonColor = 'black',
	color,
	icon,
	submit,
	onClick,
}: ButtonProps) => {
	return (
		<StyledButton
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
