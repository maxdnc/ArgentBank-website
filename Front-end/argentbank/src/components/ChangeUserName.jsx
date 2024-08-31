import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProfile } from '../features/auth/userProfileSlice';
import {
  usePostProfileMutation,
  usePutNewUserNameMutation,
} from '../features/api/apiSlice';
import PrimaryButton from './PrimaryButton';
import InputField from './InputField';

const ChangeUserName = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.isLoggedIn);
  const { firstName, lastName, userName } = useSelector(
    (state) => state.userProfile
  );

  const [editMode, setEditMode] = useState(false);
  const [tempUserName, setTempUserName] = useState(userName);
  const [errorMessage, setErrorMessage] = useState('');

  const [postProfile] = usePostProfileMutation();
  const [putNewUserName] = usePutNewUserNameMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tempUserName || tempUserName.length <= 3) {
      setErrorMessage('Username must be at least 4 characters long');
      return;
    }

    setErrorMessage('');
    setEditMode(false);

    putNewUserName({ token, userName: tempUserName })
      .then(() => postProfile(token).unwrap())
      .then((data) => {
        dispatch(setUserProfile(data.body));
        setTempUserName(data.body.userName);
      })
      .catch((error) => {
        console.error('Failed to update username:', error);
        setTempUserName(userName);
      });
  };

  const handleUsernameChange = (e) => {
    setTempUserName(e.target.value);
  };

  const handleCancel = () => {
    setEditMode(false);
    setErrorMessage('');
    setTempUserName(userName);
  };

  const startEditing = () => {
    setEditMode(true);
    setTempUserName(userName);
  };

  if (!editMode) {
    return (
      <PrimaryButton
        label="Edit Name"
        onClick={startEditing}
        className="mt-4"
        buttonStyle="border"
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[300px] flex-col items-center justify-center gap-4"
    >
      <InputField
        label="First Name"
        id="firstName"
        value={firstName}
        readOnly
      />
      <InputField label="Last Name" id="lastName" value={lastName} readOnly />
      <InputField
        label="Username"
        id="userName"
        value={tempUserName}
        onChange={handleUsernameChange}
      />
      {errorMessage && (
        <p className="text-center text-[0.9rem] font-light text-red-500">
          {errorMessage}
        </p>
      )}
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
          type="button"
        />
      </div>
    </form>
  );
};

export default ChangeUserName;
