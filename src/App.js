
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import MembersPage from './Components/MembersPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MembersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
