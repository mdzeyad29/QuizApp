import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Quiz } from './Pages/Quiz';
import { ResultPage } from './Pages/ResultPage';
function App(){
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
    </div>
  );
}

export default App;
