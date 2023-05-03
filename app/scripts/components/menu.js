import React, { useState, useContext } from 'react';
import { Search } from './Search.jsx';

function Menu() {
	const [showingSearch, setShowingSearch] = useState(false);

	const showSearchContainer = (e) => {
		e.preventDefault();
		setShowingSearch(!showingSearch);
	};

	return (
		<header className='menu'>
			<div className='menu-container'>
				<div className='menu-holder'>
					<h1>ELC</h1>
					<nav>
						<a href='#' className='nav-item'>
							HOLIDAY
						</a>
						<a href='#' className='nav-item'>
							WHAT'S NEW
						</a>
						<a href='#' className='nav-item'>
							PRODUCTS
						</a>
						<a href='#' className='nav-item'>
							BESTSELLERS
						</a>
						<a href='#' className='nav-item'>
							GOODBYES
						</a>
						<a href='#' className='nav-item'>
							STORES
						</a>
						<a href='#' className='nav-item'>
							INSPIRATION
						</a>

						<a href='#' onClick={showSearchContainer}>
							<i className='material-icons search'>search</i>
						</a>
					</nav>
				</div>
			</div>
			<Search
				showingSearch={showingSearch}
				showSearchContainer={showSearchContainer}
			/>
		</header>
	);
}

export default Menu;
