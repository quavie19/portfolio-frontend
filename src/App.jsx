import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import NewPost from './pages/NewPost';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='about' element={<AboutMe />} />
        <Route path='contact' element={<ContactMe />} />
        <Route path='new' element={<NewPost />} />
        <Route path='blog' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
