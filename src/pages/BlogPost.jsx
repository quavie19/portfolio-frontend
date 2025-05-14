import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await fetch(`http://localhost:8000/post/${id}`);
      const jsonData = await response.json();

      setPost(jsonData);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <div className='blog'>
      {loading ? (
        <p>Loading post...</p>
      ) : (
        <div className='post'>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <p className='date'>
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
