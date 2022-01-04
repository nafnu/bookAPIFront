import './App.css';
import{ Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselContainer from './components/CarouselContainer';

import Books from './components/Books';
import BookView from './components/BookView';
import BookAdd from './components/BookAdd';
import BookEdit from './components/BookEdit';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
        <CarouselContainer />
    <Routes>
             <Route path='/' element={<Books />} />
             <Route path='/editBook' element={<BookEdit />} />
             <Route path='/viewBook' element={<BookView />} />
             <Route path='/addBook' element={<BookAdd />} />
      </Routes>

    </div>
  );
}

export default App;
