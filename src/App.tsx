import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Signup from './Pages/Signup';

interface Props {
  children:any
}

const PrivateRoute: React.FC<Props> = ({children}) => {
  return children;
}

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route  path="/" element={<Signup />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
