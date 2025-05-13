import LOGO from '../img/LOGO.jpg';

const AboutMe = () => {
  return (
    <div id='about'>
      <div className='header-content'>
        <div className='tite'>
          <h1>Jaquavia</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className='profile-pic'>
          <img
            src={LOGO}
            alt='profile-pic'
            style={{ height: '200px', borderRadius: '50%' }}
          />
        </div>
      </div>
      <div className='bio'>
        <p>
          I’m a full-stack developer who loves building things that work and
          look good. Here, I break down front-end and back-end concepts in a way
          that’s fun, real, and actually makes sense
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default AboutMe;
