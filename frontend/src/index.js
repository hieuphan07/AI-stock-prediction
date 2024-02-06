import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense(
	'Ngo9BigBOggjHTQxAR8/V1NAaF1cXmhLYVJ1WmFZfVpgcV9CYVZURmYuP1ZhSXxXdkdjX39bdHVQRGleWUU='
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
