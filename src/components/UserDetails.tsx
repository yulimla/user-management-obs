import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/userSlice';
import { User } from '../types';
import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  CardMedia,
} from '@mui/material';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    dispatch(editUser({ ...user, name, email }));
    onClose();
  };

  return (
    <>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent>
        <CardMedia
          component="img"
          height="80px"
          image="https://picsum.photos/200"
          alt="profile"
          sx={{
            margin: '15px auto 15px auto ',
            width: '80px',
            borderRadius: '15px',
          }}
        />
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
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </>
  );
};

export default UserDetails;
