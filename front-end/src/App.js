import './App.css';
import{ Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'block', width: 700, padding: 30 }}>
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            alt="Sample Brand Logo"
            width="35"
            className="align-top d-inline-block"
            height="35"
          />Ramdon Book
        </Navbar.Brand>
      </Navbar>
    </div>
    <Routes>
             <Route path='/' element={<Book />} />
      </Routes>

    </div>
  );
}

export default App;
