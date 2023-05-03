import React, { useEffect, useState } from 'react';
import { ServerData } from './ServerData.jsx';

function Home() {
	return (
		<section id='home'>
			<div className='content'>
				<ServerData />
			</div>
		</section>
	);
}

export default Home;
