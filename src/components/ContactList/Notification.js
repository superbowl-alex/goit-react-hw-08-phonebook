import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Notification = ({ message }) => {
  return <Typography variant="h3">{message} </Typography>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
