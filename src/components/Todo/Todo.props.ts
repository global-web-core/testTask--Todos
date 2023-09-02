import { DetailedHTMLProps, HTMLAttributes} from 'react';

export interface TodoProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	title: string;
	completed: boolean;
}