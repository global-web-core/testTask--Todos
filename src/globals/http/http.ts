import axios from "axios";

const domain = "https://jsonplaceholder.typicode.com";
const entitie = "todos";

const request = async (page: number) => {
	const url = `${domain}/${entitie}?_page=${page}`;

	const fetch = await axios.get(url, { 
		headers: {
			'Content-Type': 'application/json',
		}
	})
		.then(function (response) {
			if (response.status === 200) {
				const data = response.data;
				return data;
			}
		})
		.catch(function (error) {
			console.log('Error fetch API jsonplaceholder:', error.message);
		});

	return fetch;
};

const get = async (page: number) => await request(page);

export {
	get
};