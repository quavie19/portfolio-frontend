const Header = () => {
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <h1>The Girl Code</h1>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <a href='#'>
                {' '}
                <span>
                  <i
                    className='fa-regular fa-newspaper'
                    style={{ color: '#FA008E' }}
                  ></i>
                </span>
                Blog
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <i
                    className='fa-solid fa-mobile-screen-button'
                    style={{ color: '#FA008E' }}
                  ></i>
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
