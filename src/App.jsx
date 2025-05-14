import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import NewPost from './pages/NewPost';
import BlogPost from './pages/BlogPost';

//components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='about' element={<AboutMe />} />
        <Route path='contact' element={<ContactMe />} />
        <Route path='new' element={<NewPost />} />
        <Route path='blog/:id' element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
