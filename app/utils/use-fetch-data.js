import { useState, useEffect } from 'react';

export function useFetchData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('http://localhost:3035');
			const jsonData = await response.json();
			setData(jsonData);
		}
		fetchData();
	}, []);

	return [data, setData];
}
