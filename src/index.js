import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider
    appId="93e346fd-79c2-411d-b5e1-4c23cfe86ee6"
    language="en-US"
  >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);


//7c4aee08-1073-4a32-b862-ebe1850e0732