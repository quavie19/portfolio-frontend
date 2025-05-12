const ContactMe = () => {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form action='#' method='post'>
        <div className='name'>
          <label for='fname'>Name</label>
          <input type='text' id='fname' name='firstname' />
        </div>
        <div className='email'>
          <label for='email'>Email</label>
          <input type='email' id='lname' name='email' />
        </div>
        <div className='message'>
          <label for='message'>Message</label>
          <input type='text' id='message' name='message' />
        </div>
        <div className='submit'>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
