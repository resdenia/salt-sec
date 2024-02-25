import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App.tsx';
import 'src/index.css';
import { Provider } from 'react-redux';

import { store } from 'src/store/store';
import ErrorBoundary from 'src/ErrorBoundary/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
