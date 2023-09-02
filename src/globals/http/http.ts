import axios, { AxiosResponse } from "axios";
import { ITodo } from "../../typesAndInterfaces/interfaces";
import {codeHttp} from '../constants/constants';

const domain = "https://jsonplaceholder.typicode.com";
const entitie = "todos";

const request = async (page: number) => {
	const url = `${domain}/${entitie}?_page=${page}`;

	const fetch = await axios.get(url, { 
		headers: {
			'Content-Type': 'application/json',
		}
	})
		.then(function (response: AxiosResponse) {
			if (response.status === codeHttp.ok) {
				const data: ITodo.Json[] | undefined = response.data;
				return data;
			} else {
				throw new Error(`Request failed with status code ${response.status}`);
			}
		})
		.catch(function (error) {
			console.log('Error fetch API jsonplaceholder:', error.message);
			return undefined;
		});

	return fetch;
};

const get = async (page: number) => await request(page);

export {
	get
};