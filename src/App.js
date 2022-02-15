import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/pages/Create';
import BlogDetails from './components/pages/BlogDetails';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
