import { Http } from '../globals';
import {ITodo} from '../typesAndInterfaces/interfaces';

const getTodos	= async (page: number): Promise<ITodo.Json[] | undefined> => await Http.get(page);

export {
	getTodos,
}