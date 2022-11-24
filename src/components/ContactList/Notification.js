import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Notification = ({ message }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        width: 400,
        backgroundColor: 'primary.light',
        color: 'primary.contrastText',
        borderRadius: 2,
        p: 2,
        boxShadow: 2,
        fontSize: 22,
      }}
    >
      {message}
    </Typography>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
