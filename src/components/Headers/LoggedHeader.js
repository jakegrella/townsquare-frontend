import { useHistory } from 'react-router-dom';

const LoggedHeader = () => {
  const { push } = useHistory();

  const logOut = () => {
    try {
      localStorage.removeItem('token');
      console.log('logged out');
      push('/login');
    } catch {
      console.log('error logging out');
    }
  };

  return (
    <header>
      <h1>TownSquare</h1>

      <button className='btn' onClick={logOut}>
        log out
      </button>
      <style jsx='true'>{`
        header {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          margin: 2rem;
        }

        .btn {
          font-size: 1.4rem;
          border: 2px solid #000;
          border-radius: 25px;
          padding: 1rem 2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background: #fcefde;
          color: #000;
          // width: 20rem;
        }
      `}</style>
    </header>
  );
};

export default LoggedHeader;
