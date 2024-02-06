import React from 'react';

import './LandingPageContent.css';

const LandingPageContent = () => {
	return (
		<div className='landing-page'>
			<div className='landing-page__container'>
				<div className='header'>
					<div className='logo'>
						<img alt='logo' src={require('../../asset/images/logo.png')} />
					</div>
					<div className='nav-bar'>
						<span>HOME</span>
						<span>NEWS</span>
						<span>ABOUT</span>
						<span>CONTACT</span>
						<button className='sign-in'>SIGN IN</button>
					</div>
				</div>
				<div className='hero'>
					<div className='text'>
						<h1 className='title'>AI STOCK PREDICTION</h1>
						<p className='description'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
							esse aperiam repellendus distinctio odio amet laborum recusandae
							deserunt cum iure atque dicta, cumque, eligendi exercitationem
							eveniet nulla necessitatibus tempore quos!
						</p>
						<button className='action'>Learn More</button>
					</div>
					<div className='img'>
						<img
							src={require('../../asset/images/red-bull.png')}
							alt='landing-page'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPageContent;
