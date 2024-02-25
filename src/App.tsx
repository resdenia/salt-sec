import { BrowserRouter } from 'react-router-dom';
import MainRoutes from 'src/routes/MainRoutes';

import 'src/App.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
