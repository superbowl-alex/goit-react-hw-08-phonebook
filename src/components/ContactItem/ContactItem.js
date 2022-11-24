import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastOptions } from 'utils/toastOptions';
import { deleteContact } from 'redux/contacts/operations';
import { selectPendingDeletingStatus } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = async () => {
    setDeleteId(id);
    const { error } = await dispatch(deleteContact(id));
    if (!error) {
      toast.success(
        `Сontact ${name} has been successfully deleted`,
        toastOptions
      );
      return;
    }
    toast.error(
      `An error has occurred, contact ${name} hasn't been deleted.`,
      toastOptions
    );
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
        transition: 'transform 250ms ease-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
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
          fontSize: 13,
          fontWeight: 500,
          bgcolor: 'primary.light',
          transition: 'transform 250ms ease-out',
          '&:hover': {
            transform: 'scale(1.03)',
            bgcolor: 'primary.light',
            color: 'primary.contrastText',
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
