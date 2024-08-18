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
import InputField from './InputField';

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

  const handleCancel = () => {
    setEditName(false);
    setNewUserName(userProfile.userName);
  };

  return (
    <>
      {editName && (
        <form
          onSubmit={handleSubmit}
          className="flex w-[300px] flex-col items-center justify-center gap-4"
        >
          <InputField
            label="First Name"
            id="firstName"
            value={userProfile.firstName}
            readOnly
          />
          <InputField
            label="Last Name"
            id="lastName"
            value={userProfile.lastName}
            readOnly
          />
          <InputField
            label="Username"
            id="userName"
            value={newUserName}
            onChange={handleChange}
            readOnly={false}
          />
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
              onClick={handleCancel}
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
