import { useState } from 'react';
import logo from '/src/img/LOGO.jpg';

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  return (
    <>
      <div className='grid-container'>
        <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div>
        <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div>
        <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div>
        <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div>
        <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div>
        <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
