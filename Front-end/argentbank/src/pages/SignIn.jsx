// import font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import react-router-dom
import { useNavigate } from 'react-router-dom';

// import react
import { useEffect, useState } from 'react';
// import redux RTK Query
import { useGetTokenMutation } from '../features/api/apiSlice';

// import redux
import { useDispatch } from 'react-redux';
import { selectIsLoggedIn, setLoggedIn } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import PrimaryButton from '../components/PrimaryButton';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shakingAnimation, setShakingAnimation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // call api
  const [getToken, { isLoading, isError }] = useGetTokenMutation();

  // if connected
  const token = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (token) {
      navigate('/users');
    }
  }, [token, navigate]);

  const dispatch = useDispatch();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    getToken({ email, password })
      .unwrap() // Récupère le résultat
      .then((data) => {
        const token = data.body.token;
        setErrorMessage('');
        dispatch(setLoggedIn(token));
        navigate('/users');
      })
      .catch((error) => {
        setShakingAnimation(true);
        setTimeout(() => {
          setShakingAnimation(false);
        }, 500);
        setErrorMessage(error.data.message);
      });
  };

  // handle input

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex min-h-[80vh] flex-1 flex-col items-center bg-tertiary ">
      <section
        className={`mt-12 box-border flex max-w-[300px]  flex-col items-center gap-4 bg-white p-8 ${
          shakingAnimation ? 'animate-errorShaking' : ''
        } `}
      >
        <FontAwesomeIcon icon={faCircleUser} />
        <h2 className="text-[1.5em] font-bold">Sign In</h2>
        <p className="text-center text-[0.9rem] font-light text-red-500">
          {isError && errorMessage}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className={`font-bold ${isError ? 'text-red-400' : ''}`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className={`w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem] ${
                isError ? 'border-red-400 ' : ''
              }`}
              onChange={handleEmailInput}
              value={email}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`font-bold ${isError ? 'text-red-400' : ''}`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem] ${
                isError ? 'border-red-400 ' : ''
              }`}
              onChange={handlePasswordInput}
              value={password}
              required
            />
          </div>
          <div>
            <input type="checkbox" id="remember-me" />
            <label className="ml-2" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <PrimaryButton
            label={isLoading ? 'Loading...' : 'Sign In'}
            type={'submit'}
            className={'mt-4 w-full underline'}
          />
        </form>
      </section>
    </div>
  );
};

export default SignIn;
