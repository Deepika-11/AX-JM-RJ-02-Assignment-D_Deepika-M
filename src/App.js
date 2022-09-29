import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Blog from './component/Blog';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
