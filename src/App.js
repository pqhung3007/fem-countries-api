import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries'
import Country from './components/Country';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path='/'
            element={<Countries />}
          />
          <Route path='/countries/:name'
            element={<Country />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
