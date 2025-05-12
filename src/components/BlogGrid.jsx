import { useState, useEffect } from 'react';
import logo from '/src/img/LOGO.jpg';

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //get posts
  const getPosts = async () => {
    try {
      const response = await fetch('http://localhost:8000/posts');
      const jsonData = await response.json();

      setPosts(jsonData);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className='grid-container'>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className='card'>
              <img
                src={post.cover_photo}
                alt={post.title}
                style={{ height: '250px' }}
              />
              <p className='date'>
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h2 className='title'>{post.title}</h2>
              <p className='description'>{post.description}</p>
            </div>
          ))
        )}
      </div>
      {/* <div className='card'>
          <img src={logo} alt='logo' style={{ height: '250px' }} />
          <p className='date'>Date</p>
          <h2 className='tite'>Title</h2>
          <p className='description'>description</p>
        </div> */}
    </>
  );
};

export default BlogGrid;
