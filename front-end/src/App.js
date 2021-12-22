import './App.css';
import{ Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselContainer from './components/CarouselContainer';

import Book from './components/Book';

function App() {
  return (
    <div className="App">
        <CarouselContainer />
    <Routes>
             <Route path='/' element={<Book />} />
      </Routes>

    </div>
  );
}

export default App;
