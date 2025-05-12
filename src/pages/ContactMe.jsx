import { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div id='contact'>
      <h1>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {/* Row for Name and Email */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor='name'>Name</label>
            <input
              value={formData.name}
              onChange={handleChange}
              type='text'
              id='name'
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor='email'>Email</label>
            <input
              value={formData.email}
              onChange={handleChange}
              type='email'
              id='email'
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            id='message'
            rows='5'
            style={{ width: '100%' }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          style={{ alignSelf: 'flex-start', width: '100%' }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
