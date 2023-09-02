import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	text: string;
	color: 'bright' | 'light';
	triangle?: 'right';
}