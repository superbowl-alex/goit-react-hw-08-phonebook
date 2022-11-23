import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { deleteContact } from 'redux/contacts/operations';
import LoadingButton from '@mui/lab/LoadingButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from 'react-redux';
import { selectPendingDeletingStatus } from 'redux/contacts/selectors';

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
        width: 300,
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
