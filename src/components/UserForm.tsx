import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../redux/userSlice';
import { User } from '../types';
import {
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface UserFormProps {
  user?: User;
  onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleSubmit = () => {
    if (user) {
      dispatch(editUser({ ...user, name, email }));
    } else {
      const newUser: User = {
        id: Date.now(), // Using timestamp as a unique ID
        name,
        username: name.split(' ').join('').toLowerCase(),
        email,
      };
      dispatch(addUser(newUser));
    }
    onClose();
  };

  return (
    <>
      <DialogTitle>{user ? 'Edit User' : 'Add User'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>{user ? 'Save' : 'Add'}</Button>
      </DialogActions>
    </>
  );
};

export default UserForm;
