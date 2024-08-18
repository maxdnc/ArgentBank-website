import { useState, useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from '../features/auth/userProfileSlice';
// api slice redux
import {
  usePutNewUserNameMutation,
  usePostProfileMutation,
} from '../features/api/apiSlice';
import PrimaryButton from './PrimaryButton';

const ChangeUserName = () => {
  const token = useSelector((state) => state.auth.isLoggedIn);
  const [editName, setEditName] = useState(false);
  const userProfile = useSelector((state) => state.userProfile);
  const [newUserName, setNewUserName] = useState('');
  const [postProfile] = usePostProfileMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const [putNewUserName] = usePutNewUserNameMutation();

  useEffect(() => {
    if (userProfile.userName) {
      postProfile(token)
        .unwrap()
        .then((data) => {
          dispatch(setUserProfile(data.body));
          setNewUserName(userProfile.userName);
        });
    }
  }, [dispatch, postProfile, token, userProfile.userName]);

  const handleChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUserName.length <= 3) {
      setErrorMessage('Username must be at least 4 characters long');
      return;
    } else {
      setErrorMessage('');
    }

    setEditName(false);
    const user = {
      token: token,
      userName: newUserName,
    };

    putNewUserName(user).then(() => {
      postProfile(token)
        .unwrap()
        .then((data) => {
          dispatch(setUserProfile(data.body));
          setNewUserName(userProfile.userName);
        });
    });
  };

  return (
    <>
      {editName && (
        <form
          onSubmit={handleSubmit}
          className="flex w-[300px] flex-col items-center justify-center gap-4"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <label className="font-bold text-white" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border-[1px] border-gray-500 bg-gray-300 p-[5px] text-[1.2rem]"
              value={userProfile.firstName}
              readOnly
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <label className="font-bold text-white" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border-[1px] border-gray-500 bg-gray-300 p-[5px] text-[1.2rem]"
              value={userProfile.lastName}
              readOnly
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <label className="font-bold text-white" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              id="userName"
              className="w-full border-[1px] border-gray-500 p-[5px] text-[1.2rem]"
              value={newUserName}
              onChange={handleChange}
              required
            />
          </div>
          <p className="text-center text-[0.9rem] font-light text-red-500">
            {errorMessage}
          </p>
          <div className="flex w-full flex-row items-center justify-center gap-4">
            <PrimaryButton
              label="Save"
              type="submit"
              buttonStyle="border"
              className="w-full"
            />
            <PrimaryButton
              label="Cancel"
              onClick={() => setEditName(false)}
              buttonStyle="border"
              className="w-full"
              type={'button'}
            />
          </div>
        </form>
      )}
      {!editName && (
        <PrimaryButton
          label="Edit Name"
          onClick={() => setEditName(true)}
          className={'mt-4'}
          buttonStyle="border"
        />
      )}
    </>
  );
};
export default ChangeUserName;
