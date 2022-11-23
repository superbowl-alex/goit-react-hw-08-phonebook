import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default PrivateRoute;
