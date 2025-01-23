import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='/article/:id' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
