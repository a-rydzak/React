import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Wrapper Element App
import App from './App';
// web API that helps you cache your assets and other files so that when the user
 // is offline or on slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker's for now
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
