import React, {useContext} from 'react';
import { SearchContext } from '../context/search-context.jsx';

export function Search({ showingSearch, showSearchContainer }) {
	const { setState } = useContext(SearchContext);

	const onSearch = async (e) => {
		e.preventDefault();
		const searchTerm = e.target.value;
		setState(searchTerm);
	};

	return (
		<div className={(showingSearch ? 'showing ' : '') + 'search-container'}>
			<input type='text' onChange={onSearch} />
			<a href='#' onClick={showSearchContainer}>
				<i className='material-icons close'>close</i>
			</a>
		</div>
	);
}