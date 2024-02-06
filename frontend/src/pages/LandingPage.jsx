import React from 'react';

import LandingPageContent from '../components/landing-page/LandingPageContent';
import SP500 from '../components/sp500/SP500';

function LandingPage() {
	return (
		<>
			<LandingPageContent />
			<SP500 />
		</>
	);
}

export default LandingPage;
