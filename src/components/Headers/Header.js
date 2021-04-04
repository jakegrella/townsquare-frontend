import { Link } from 'react-router-dom';
import logo from '../../assets/ts-logo.png';

const Header = () => {
  return (
    <div>
      <header>
        <Link to='/'>
          <img src={logo} alt='townsquare' />
        </Link>
        <nav>
          <Link to='/login' className='login'>
            Log In
          </Link>
          <Link to='/signup' className='signup'>
            Get Started
          </Link>
        </nav>
      </header>
      <style jsx='true'>{`
        header {
          width: 100vw;
          height: 10rem;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          padding: 0 5rem;
        }

        a {
          font-size: 1.6rem;
          margin-left: 2rem;
        }

        .signup {
          background: #007d68;
          color: #fff;
          padding: 1.2rem 2rem;
          border-radius: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Header;
