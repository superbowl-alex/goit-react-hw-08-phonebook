import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectPendingDeletingStatus } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = () => {
    setDeleteId(id);
    dispatch(deleteContact(id));
  };

  const pendingDeleting = useSelector(selectPendingDeletingStatus);
  const shouldSpinnerDeleting = deleteId && pendingDeleting;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 400,
        height: 40,
        px: 1,
        backgroundColor: 'primary.light',
        color: 'primary.dark',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography>
        {name}: {number}
      </Typography>
      <LoadingButton
        size="small"
        onClick={handleDelete}
        endIcon={<HighlightOffIcon />}
        loading={shouldSpinnerDeleting}
        loadingPosition="end"
        variant="contained"
        sx={{
          bgcolor: 'primary.light',
          transition: 'transform 250ms ease-out',
          '&:hover': {
            transform: 'scale(1.03)',
            bgcolor: 'primary.light',
          },
        }}
      >
        Delete
      </LoadingButton>
    </Box>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
