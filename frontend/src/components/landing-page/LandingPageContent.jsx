import React from 'react';

import './LandingPageContent.css';

const LandingPageContent = () => {
	return (
		<div className='landing-page'>
			<div className='landing-page__container'>
				<div className='header'>
					<div className='logo'>
						<img
							alt='logo'
							src='https://img.freepik.com/free-vector/financial-logo-business-template-branding-design-vector_53876-136259.jpg?w=826&t=st=1707152692~exp=1707153292~hmac=e3cbea523230d3af9a1f894bf56ceeffb5f8af040d3470bc3b4e67dd1b34dc35'
						/>
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
							src='https://img.freepik.com/free-vector/illustrated-stock-exchange-data-concept_52683-43208.jpg?w=826&t=st=1707150846~exp=1707151446~hmac=00000bd3cc2c6b7ad3bbbb9bc61979889c4222eeb0b19011e83b5e5de114b6c0'
							alt='landing-page'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPageContent;
