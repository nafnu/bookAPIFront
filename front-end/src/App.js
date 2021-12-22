import './App.css';
import{ Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselContainer from './components/CarouselContainer';

import Books from './components/Books';

function App() {
  return (
    <div className="App">
        <CarouselContainer />
    <Routes>
             <Route path='/' element={<Books />} />
      </Routes>

    </div>
  );
}

export default App;
