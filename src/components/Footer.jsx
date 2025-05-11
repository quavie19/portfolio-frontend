const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='logo'>
          <h1>The Girl Code</h1>
          <p>Walker Tech LLC. All rights reserved</p>
        </div>
        <div className='footer-links'>
          <ul>
            <li>
              <a href='#'>
                {' '}
                <i
                  class='fa-brands fa-square-twitter fa-2xl'
                  style={{ color: '#FA008E' }}
                ></i>
              </a>
            </li>
            <li>
              <a href=''>
                <i
                  class='fa-brands fa-linkedin fa-2xl'
                  style={{ color: '#FA008E' }}
                ></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i
                  class='fa-brands fa-twitch fa-2xl'
                  style={{ color: '#FA008E' }}
                ></i>
              </a>
            </li>
            <li>
              <i
                class='fa-brands fa-instagram fa-2xl'
                style={{ color: '#FA008E' }}
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
