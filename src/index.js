var PORT = process.env.PORT || 3000;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './index.css';

import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(<React.StrictMode>
    <SimpleReactLightbox>
        <App />
    </SimpleReactLightbox>
</React.StrictMode>, 	 document.getElementById('root')
);





